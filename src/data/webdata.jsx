import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../assets/utilits';
import { lazy } from 'react';

const AllPages = lazy(() => import('../pages/AllPages/AllPages'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));
const AchievementsPage = lazy(() => import('../pages/AchievementsPage/AchievementsPage'));
const FoodCourtPage = lazy(() => import('../pages/FoodCourtPage/FoodCourtPage'));
const MapPage = lazy(() => import('../pages/MapPage/MapPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const PrivateRoute = lazy(() => import('../pages/PrivateRoute/PrivateRoute'));
const NearestRestaurantsPage = lazy(() => import('../pages/NearestRestaurantsPage/NearestRestaurantsPage'));
const RestaurantsPage = lazy(() => import('../pages/RestaurantsPage/RestaurantsPage'));
const SocialsPage = lazy(() => import('../pages/SocialsPage/SocialsPage'));
const SpecialitiesPage = lazy(() => import('../pages/SpecialitiesPage/SpecialitiesPage'));
const BascketPage= lazy(() => import('../pages/BascketPage/BascketPage'));
const Layout = lazy(() => import('../pages/Layout/Layout'));

export const routerData = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <AllPages />,
        errorElement: <ErrorPage />,
      },
      {
        index: ROUTES.foodcourt,
        element: <FoodCourtPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.login,
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.restaurants,
        element: <RestaurantsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.nearestrestaurants,
        element: <NearestRestaurantsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.specialities,
        element: <SpecialitiesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.achievements,
        element: <AchievementsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.map,
        element: <MapPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.social,
        element: <SocialsPage />,
        errorElement: <ErrorPage />,
      },
      {
        element: <PrivateRoute children />,
        children: [
          {
            path: ROUTES.bascket,
            element: <BascketPage />,
          },
        ]
      },
    ]
  },
]);

export const footerData = [
  {
    title: 'About us',
    item: [
      {
        type: 'link',
        to: '/concept',
        name: 'Concept',
      },
      {
        to: '/franchise',
        type: 'link',
        name: 'Franchise',
      },
      {
        type: 'link',
        to: '/business',
        name: 'Business',
      },
      {
        type: 'link',
        to: '/signup',
        name: 'Restaurant signup',
      },
      {
        type: 'link',
        to: '/forinvestors',
        name: 'For Investors',
      },
    ]
  },
  {
    title: 'Get help',
    item: [
      {
        type: 'link',
        to: '/aboutuspage',
        name: 'Read FAQs',
      },
      {
        type: 'link',
        to: ROUTES.restaurants,
        name: 'Restaurants',
      },
      {
        type: 'link',
        to: ROUTES.specialities,
        name: 'Specialities',
      },
      {
        type: 'link',
        to: ROUTES.login,
        name: 'Sign up to deliver',
      },
      {
        type: 'dropdown',
        to: '',
        name: 'English',
      },
    ]
  },
  {
    title: 'Contact us',
    item: [
      {
        type: 'text',
        to: '',
        name: 'ROAD Yellow kitchen Paris 11',
      },
      {
        type: 'text',
        to: '',
        name: '69 avenue de la Republique 75011 Paris',
      },
      {
        type: 'link',
        to: "tel:+380800111126",
        name: '0800 111 126',
      },
      {
        type: 'link',
        to: 'mailto:contact@yellowkitchens.com',
        name: 'contact@yellowkitchens.com',
      },
    ]
  },
];
