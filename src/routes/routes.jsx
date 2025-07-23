import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../component/Main/AboutUs/AboutUs";
import AddSubscription from "../component/Main/AddSubscription/AddSubscription";
import AllAdminSuperAdmin from "../component/Main/AllAdminSuperAdmin/AllAdminSuperAdmin";
import AllUsers from "../component/Main/AllUsers/AllUsers";
import UserReports from "../component/Main/UserReports/UserReports";
import EditAboutUs from "../component/Main/EditAboutUs/EditAboutUs";
import EditPrivacyPolicy from "../component/Main/EditPrivacyPolicy/EditPrivacyPolicy";
import EditSubscription from "../component/Main/EditSubscription/EditSubscription";
import EditTermsConditions from "../component/Main/EditTermsConditions/EditTermsConditions";
import ErrorPage from "../component/Main/ErrorPage/ErrorPage";
import LomiFlowerManagement from "../component/Main/LomiFlowerManagement/LomiFlowerManagement";
import Notification from "../component/Main/Notification/Notification";
import OnboardingImage from "../component/Main/OnBardingImages/OnBardingImages";
import ProfileVerifications from "../component/Main/ProfileVerifications/ProfileVerifications";
import Settings from "../component/Main/Settings/Settings";
import Subscription from "../component/Main/Subscription/Subscription";
import TermsCondition from "../component/Main/TermsConditions/TermsCondition";
import Transaction from "../component/Main/Transaction/Transaction";
import MainLayout from "../layout/MainLayout";
import ForgetPassword from "../page/Auth/ForgetPassword/ForgetPassword";
import NewPassword from "../page/Auth/NewPassword/NewPassword";
import Otp from "../page/Auth/Otp/Otp";
import SignIn from "../page/Auth/SignIn/SignIn";
import DashboardHome from "../page/DashboardHome/DashboardHome";
import PrivacyPolicy from "../page/PrivacyPolicy/PrivacyPolicy";
import AdminRoutes from "./AdminRoutes";
import GeneralSettings from "../component/Main/GeneralSettings/GeneralSettings";
import EditGeneralSettings from "../component/Main/EditGeneralSettings/EditGeneralSettings";
import PasswordSettings from "../component/Main/PasswordSettings/PasswordSettings";
import PreferredCountries from "../component/Main/PreferredCountries/PreferredCountries";
import SupportMail from "../component/Main/SupportMail/SupportMail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <MainLayout />
      // <AdminRoutes>
      // </AdminRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path:"/profile-verification",
        element: <ProfileVerifications/>
      },
      {
        path:"/lomi-flower-management",
        element: <LomiFlowerManagement/>
      },
      {
        path:"/transaction",
        element:<Transaction/>
      },
      {
        path: "/admins",
        element: <AllAdminSuperAdmin />,
      },
      {
        path: "/user-reports",
        element: <UserReports />,
      },

      {
        path: "/onboarding-images",
        element: <OnboardingImage />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/subscription/add-subscription",
        element: <AddSubscription />,
      },
      {
        path: "/subscription/edit-subscription/:id",
        element: <EditSubscription />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "settings/general-settings",
        element: <GeneralSettings />,
      },
      {
        path: "settings/edit-general-settings",
        element: <EditGeneralSettings />,
      },
      {
        path: "settings/onboarding-editor",
        element: <OnboardingImage />,
      },
      {
        path: "settings/preferred-countries",
        element: <PreferredCountries />,
      },
      {
        path: "settings/support-mails",
        element: <SupportMail />,
      },
      {
        path: "settings/password-change",
        element: <PasswordSettings />,
      },
      {
        path: "settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/terms-conditions",
        element: <TermsCondition />,
      },
      {
        path: "settings/about-us",
        element: <AboutUs />,
      },
      {
        path: "settings/edit-privacy-policy",
        element: <EditPrivacyPolicy />,
      },
      {
        path: "settings/edit-terms-conditions",
        element: <EditTermsConditions />,
      },
      {
        path: "settings/edit-about-us",
        element: <EditAboutUs />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/auth",
    errorElement: <h1>Auth Error</h1>,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "otp/:email",
        element: <Otp />,
      },
      {
        path: "new-password/:email",
        element: <NewPassword />,
      },
    ],
  },
]);

export default router;
