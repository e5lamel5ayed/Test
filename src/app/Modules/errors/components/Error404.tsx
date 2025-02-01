import { FC } from 'react';
import { Link } from 'react-router-dom';
// import { toAbsoluteUrl } from '../../../../_metronic/helpers';

const Error404: FC = () => (
  <>
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-column flex-center flex-column-fluid">
        <div className="d-flex flex-column flex-center text-center p-10">
          <div className="card card-flush  w-lg-650px py-5">
            <div className="card-body py-15 py-lg-20">
              {/* <Outlet /> */}
              <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
              <div className="fw-semibold fs-6 text-gray-500 mb-7">We can not find that page.</div>
              <div className="mb-3">
                <img
                  src='/404-error.png'
                  className="mw-100 mh-300px theme-light-show"
                  alt=""
                />
              </div>
              <div className="mb-0">
                <Link to="/student" className="btn btn-sm btn-primary">
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export { Error404 };
