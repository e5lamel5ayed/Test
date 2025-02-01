export interface ListResponse {
    id: number;
    name: string;
}

export interface Istudent {
    id: number;
    fullName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    address: string;
    nationalId: string;
    email: string;
}
export interface Student {
    fullName: string;
    dateOfBirth: Date;
    placeOfBirth: string;
    address: string;
    nationalId: string;
    email: string;
    qualificationTypeId: number;
    graduationYear: number;
    departmentId: number;
    specializationId: number;
    totalDegrees: number;
    degreeId: number;
    enrollmentYear: number;
    enrollmentDate: Date;
    academicGuideId: number;
}
