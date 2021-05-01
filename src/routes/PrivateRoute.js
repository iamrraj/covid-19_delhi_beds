import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import SLUGS from "../resources/slugs";
import LoadingComponent from "../Components/loading";
import Home from "../Components/Screen/Home";
import HospitalLists from "../Components/Screen/Beds/HospitalLists";

function PrivateRoute() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={SLUGS.home} component={Home} />
        <Route exact path={SLUGS.profile} component={HospitalLists} />
        <Redirect to={SLUGS.dashboard} />
      </Switch>
    </Suspense>
  );
}

export default PrivateRoute;
