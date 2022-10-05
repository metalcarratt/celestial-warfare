export enum Gender {
    Male = 'Male',
    Female = 'Female'
}

export const generateGender = () => {
    const g = Math.floor(Math.random() * 2);
    if (g === 1) {
        return Gender.Male;
    } else {
        return Gender.Female;
    }
}