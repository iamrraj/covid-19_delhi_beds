import React, { useState, useEffect } from 'react';
import './Hospital.css';
import moment from 'moment';
import { getbedInfo, getHospitalDetails } from '../../../config/Service/Beds';
import compareByAsc from '../../../config/AscDsc/Asc';
import compareByDesc from '../../../config/AscDsc/Desc';
import { FaArrowsAltV, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';
import titleValue from '../titleValue';

function HospitalLists() {
    const [bed, setBed] = useState([]);
    const [data, setData] = useState([]);
    const [hospital, setHospital] = useState('');
    const [type, setType] = useState('beds');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBed();

        getBedDetails();
        const timer = setInterval(() => getBed(), 60 * 1000 * 2);
        return () => clearInterval(timer);
        // eslint-disable-next-line
    }, []);

    const getBed = () => {
        getbedInfo(setBed, setLoading, hospital);
    };
    const getBedDetails = () => {
        getHospitalDetails(setData, setLoading, hospital);
    };

    const sorting = (key) => {
        let arrayCopy = [...bed];
        const arrInStr = JSON.stringify(arrayCopy);
        arrayCopy.sort(compareByAsc(key));
        const arrInStr1 = JSON.stringify(arrayCopy);
        if (arrInStr === arrInStr1) {
            arrayCopy.sort(compareByDesc(key));
        }
        setBed(arrayCopy);
        // this.setState({ todos: arrayCopy });
    };

    const onChangeText = (event) => {
        setHospital(event.target.value);
    };
    // eslint-disable-next-line
    useEffect(() => {
        getBed();
        // eslint-disable-next-line
    }, [hospital]);

    const getData = () => bed.filter((c) => c.bed_type === type);
    const getDataData = (name) => data.filter((c) => c.name === name);

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <span>
                    <strong>Source :</strong> Data reported by Nodal officers of each Dedicated
                    COVID-19 hospital &{' '}
                    <a href='https://coronabeds.jantasamvad.org/' target='_blank' rel='noreferrer'>
                        Coronabeds.jantasamvad.org
                    </a>
                </span>

                <br></br>
                <span>
                    <strong>Last Updated :</strong>{' '}
                    {getData('beds')
                        .slice(0, 1)
                        .map((c) => moment(c.updated_at).local().format('YYYY-MM-DD HH:mm'))}
                </span>
            </div>

            <div style={{ textAlign: 'left', marginTop: '15px' }}>
                <div className='row style_row'>
                    <div className='form-group col'>
                        <label htmlFor='brand' className='label'>
                            SELECT BEDS TYPE
                        </label>

                        <select
                            className='form-control not_edit edit'
                            onChange={(event) => setType(event.target.value)}
                            name='oer'
                            style={{ background: 'white' }}
                        >
                            {titleValue.map((c, i) => (
                                <option value={c.name} key={i + 1}>
                                    {c.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='form-group col'>
                        <label htmlFor='brand' className='label'></label>

                        <input
                            type='text'
                            placeholder='Search By Hospital Name'
                            onChange={(tye) => onChangeText(tye)}
                            className='form-control not_edit edit'
                            style={{ marginTop: '8px' }}
                        />
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'right' }}>
                <span>
                    <span class='green1'></span>
                    <strong>More than 50 Beds Available</strong>
                </span>{' '}
                &nbsp;&nbsp;
                <span>
                    <span class='yellow1'></span>
                    <strong>Less than 50 Beds Available</strong>
                </span>{' '}
                &nbsp;&nbsp;
                <span>
                    <span class='red1'></span>
                    <strong> No Beds Available</strong>
                </span>
            </div>
            <div className='data_tablee'>
                {loading ? (
                    <img
                        src='https://digitalfleet.eu/app/static/media/spinner.0e833be9.gif'
                        className='loading_data'
                        alt='Loding'
                        style={{ width: '170px', position: 'absolute', left: '50%' }}
                    />
                ) : (
                    <table className='table '>
                        <thead className=''>
                            <tr>
                                <th></th>
                                <th onClick={() => sorting('name')}>
                                    Hospital Name{' '}
                                    <span>
                                        <FaArrowsAltV />
                                    </span>
                                </th>
                                <th style={{ width: '10%' }}>
                                    Total Beds{' '}
                                    {/* <span>
                  <FaArrowsAltV />
                </span> */}
                                </th>
                                <th style={{ width: '12%' }} onClick={() => sorting('vacant')}>
                                    Vacant Beds{' '}
                                    <span>
                                        <FaArrowsAltV />
                                    </span>
                                </th>
                                <th style={{ width: '15%' }}>Occupied Beds </th>
                                <th style={{ width: '18%' }}>Last Updated</th>
                                <th
                                    style={{ width: '18%' }}
                                    onClick={() => sorting('oxygen_left_days')}
                                >
                                    Oxygen left for{' '}
                                    <span>
                                        <FaArrowsAltV />
                                    </span>
                                </th>
                            </tr>
                        </thead>

                        {getData('beds').map((c, i) => (
                            <tbody key={i + 1}>
                                <tr
                                    className={
                                        c.vacant >= 50
                                            ? 'green accordion-toggle'
                                            : c.vacant <= 50 && c.vacant >= 1
                                            ? 'yellow accordion-toggle'
                                            : 'red accordion-toggle'
                                    }
                                >
                                    <td data-toggle='collapse' data-target={`#demo1${i + 1}`}>
                                        <button
                                            className={
                                                c.vacant >= 50
                                                    ? 'btn btn-success'
                                                    : c.vacant <= 50 && c.vacant >= 1
                                                    ? 'btn btn-warning'
                                                    : 'btn btn-danger'
                                            }
                                            id='btn-icon'
                                        >
                                            <span className='plus_icon'> +</span>
                                        </button>
                                    </td>
                                    <td>{c.name ? c.name : ''}</td>
                                    <td>{c.total ? c.total : ''}</td>
                                    <td>{c.vacant ? c.vacant : ''}</td>
                                    <td>{c.occupied ? c.occupied : ''}</td>

                                    <td>
                                        {' '}
                                        {moment(c.updated_at).local().format('YYYY-MM-DD HH:mm')}
                                    </td>
                                    <td>
                                        {c.oxygen_left_days
                                            ? `${c.oxygen_left_days} ${
                                                  c.oxygen_left_days > 1 ? 'days' : 'day'
                                              }`
                                            : ''}
                                        {'  '}
                                        {c.oxygen_left_hour
                                            ? `${c.oxygen_left_hour} ${
                                                  c.oxygen_left_hour > 1 ? 'hours' : 'hour'
                                              }`
                                            : ''}
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='12' className='hiddenRow'>
                                        <div
                                            className='accordian-body collapse'
                                            id={`demo1${i + 1}`}
                                        >
                                            {getDataData(c.name).map((d, i) => (
                                                <div
                                                    key={i + 1}
                                                    className='collaps_data'
                                                    style={{ textAlign: 'left' }}
                                                >
                                                    <div className='name_address'>
                                                        <h4>
                                                            <strong>{d.name}</strong>
                                                        </h4>
                                                        <h6>{d.address}</h6>
                                                        <hr></hr>
                                                    </div>

                                                    <div className='type'>
                                                        <h6>Management: {c.hospital_type}</h6>
                                                        <hr></hr>
                                                    </div>

                                                    <div className='call_number'>
                                                        <h6>
                                                            Contact number:{' '}
                                                            {d.contact_number.map((c) => (
                                                                <a
                                                                    className='btn '
                                                                    id='btn-call-number'
                                                                    href={`tel:${c}`}
                                                                >
                                                                    {' '}
                                                                    <FaPhoneAlt /> {c}
                                                                </a>
                                                            ))}
                                                        </h6>
                                                        <hr></hr>
                                                    </div>

                                                    {d.map_link && (
                                                        <div className='type'>
                                                            <h6>
                                                                View Location in map :{' '}
                                                                <a
                                                                    className='btn '
                                                                    id='btn-map'
                                                                    href={d.map_link}
                                                                    target='_blank'
                                                                    rel='noreferrer'
                                                                >
                                                                    {' '}
                                                                    <FaMapMarkedAlt
                                                                        style={{ fontSize: '25px' }}
                                                                    />
                                                                </a>{' '}
                                                            </h6>
                                                            <hr></hr>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                )}
            </div>
        </>
    );
}

export default HospitalLists;
