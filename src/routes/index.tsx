import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutUs from '../containers/AboutUs';
import ResetPassword from '../pages/ResetPassword';
import CreateAccount from '../pages/CreateAccount';
import Dashboard from '../containers/Dashboard';
import RegistrationReceipt from '../containers/RegistrationReceipt';
import Events from '../pages/Events';
import Profile from '../containers/Dashboard/Profile';
import Event from '../containers/Event';
import ManageEvent from '../containers/Event/manage';
import Landing from '../containers/Landing';
import NotFoundPage from '../containers/NotFoundPage';
import Login from '../pages/Login';
import FailedPayment from '../containers/Message/FailedPayment';
import SuccessfulPayment from '../containers/Message/SuccessfulPayment';
import RegistrationForm from '../containers/RegistrationForm';
import Status from '../containers/Status';
import TeamSelection from '../pages/TeamSelection';
import Workshop from '../containers/Workshop';
import Article from '../pages/Article';
import Articles from '../pages/Articles';
import PrivateRoute from './PrivateRoute';
import WorkshopManagement from '../pages/WorkshopManagement';
import GoToAnswer from '../containers/GoToAnswer';
import Correction from '../pages/Correction';
import EditArticle from '../pages/EditArticle';

const Root = () => {
  return (
    <Routes>
      <Route path="/loading/"></Route>

      <Route path="/about-us/" element={<AboutUs />} />

      <Route path="/reset-password/" element={<ResetPassword />} />
      <Route path="/create-account/" element={<CreateAccount />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/articles/" element={<Articles />} />
      <Route path="/article/:articleId/" element={<Article />} />
      <Route path="/" element={<Landing />} />

      <Route path="/" element={<PrivateRoute />}>

        <Route path="/edit-article/:articleId/" element={<EditArticle />} />
        <Route
          path="/message/payment/success/:paymentId?/"
          element={<SuccessfulPayment />}
        />
        <Route
          path="/message/payment/failure/:paymentId?/"
          element={<FailedPayment />}
        />

        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/profile/:section/" element={<Profile />} />
        <Route path="/events/" element={<Events />} />

        <Route path="/event/:eventId/workshop/:fsmId/manage/:section" element={<WorkshopManagement />} />

        <Route path="/articles/" element={<Articles />} />

        <Route path="/event/:eventId/workshop/:fsmId/" element={<Workshop />} />

        <Route path="/event/:eventId/profile/:section/" element={<Profile />} />
        <Route
          path="/event/:eventId/registration_form/"
          element={<RegistrationForm />}
        />
        <Route path="/event/:eventId/status/" element={<Status />} />
        <Route
          path="/event/:eventId/team_selection/"
          element={<TeamSelection />}
        />
        <Route path="/event/:eventId/" element={<Event />} />

        <Route path="/event/:eventId/manage/:section" element={<ManageEvent />} />

        <Route path="/event/:eventId/workshop/:fsmId/correction/:answerId/" element={<Correction />} />
        <Route path="/event/:eventId/workshop/:fsmId/correction/" element={<GoToAnswer />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Root;
