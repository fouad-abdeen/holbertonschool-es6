/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = await signUpUser();
    const photo = await uploadPhoto();
  } catch (e) {
    console.log('Sign-Up failed!');
  }
  return [{
    status: 'fullfiled',
    value: 'value',
  }];
}
