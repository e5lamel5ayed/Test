import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './Auth.css';

export const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.style.height = '100%';
    }
    return () => {
      if (root) {
        root.style.height = 'auto';
      }
    };
  }, []);

  return (
    <div className="d-flex flex-column container-fluid flex-column-fluid h-100 bg-white ">
      <div className="d-flex flex-column ">
        <div className="row">
          <div className="col-md-5 d-flex flex-center flex-column ">
            <div className="flex-lg-row-fluid d-flex align-items-center">
              <div className="w-lg-500px">
                <Outlet />
              </div>
            </div>
          </div>
          <div className="">
            <div className="container-fluid vh-100 d-flex align-items-center">
              <div className="row w-100">
                {/* Section: Image */}
                <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
                  <img
                    src="../../../../public/LoginBackground.png"
                    alt="Illustration"
                    className="img-fluid"
                  />
                </div>

                {/* Section: Form */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="form-container w-75">
                    <div className="text-end">
                      <h3 className="form-title mb-2">تسجيل الدخول</h3>
                      <p className="mb-4">
                        مرحبًا بعودتك، يرجى إدخال التفاصيل الخاصة بك
                      </p>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        // Handle form submission logic here
                      }}
                    >
                      {/* Email */}
                      <div className="mb-3 text-end">
                        <label htmlFor="email" className="form-label">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          placeholder=""
                          required
                        />
                      </div>

                      {/* Password */}
                      <div className="mb-3 text-end">
                        <label htmlFor="password" className="form-label">
                          كلمة المرور
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id="password"
                          placeholder=""
                          required
                        />
                      </div>

                      {/* Remember Me */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          تذكرني
                        </label>
                      </div>

                      {/* Forgot Password */}
                      <div className="mb-3 text-end">
                        <a
                          href="#"
                          className="text-decoration-none text-muted text-decoration-underline"
                        >
                          نسيت كلمة المرور؟
                        </a>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="btn login-btn w-100 py-2 fw-bold fs-6"
                      >
                        تسجيل الدخول
                      </button>
                    </form>

                    <p className="text-center text-muted mt-3 fw-bold">
                      ليس لدي حساب؟{' '}
                      <a href="#" className="text-decoration-none">
                        إنشاء حساب جديد
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
