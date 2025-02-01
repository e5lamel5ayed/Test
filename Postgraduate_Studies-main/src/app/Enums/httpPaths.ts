export enum HttpPaths {
    /// ///////////////////////  AUTHENTICATION  //////////////////////////

    API_GET_USER_BY_ACCESSTOKEN_URL = 'userData',
    API_LOGIN_URL = 'Login',
    API_REGISTER_URL = 'Register',
    API_REQUEST_PASSWORD_URL = 'ChangePassword',
    API_LOGOUT = 'Logout',
    API_UPDATE_USER = 'UpdateUser',
    /// ///////////////////////  STUDENT  //////////////////////////

    API_GET_ALL_STUDENT = '/api/Student/GetAllStudents',
    API_GET_PROFILE_STUDENT = '/api/Student/GetStudentById/',
    API_ADD_STUDENT = '/api/Student',
    /// ///////////////////////  Supervisor  //////////////////////////

    API_LIST_OF_SUPERVISOR = '/api/Supervisor/GetListOfSupervisors',
    /// ///////////////////////  QualificationType  //////////////////////////

    API_LIST_OF_QUALIFCATION_TYPE = '/api/QualificationType',
    /// ///////////////////////  Department  //////////////////////////

    API_LIST_OF_DEPARTMENT = '/api/Department',
    /// ///////////////////////  Specialization  //////////////////////////

    API_LIST_OF_SPECIALIZATION = '/api/Specialization/ListOf',

    /// ///////////////////////  Degress  //////////////////////////

    API_LIST_OF_DEGREES = '/api/Degree',


}