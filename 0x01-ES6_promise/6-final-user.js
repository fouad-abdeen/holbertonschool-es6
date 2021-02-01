/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = await signUpUser();
    const photo = await uploadPhoto();
  // eslint-disable-next-line no-empty
  } catch (e) { }
  return Promise.allSettled([signUpUser(), uploadPhoto()]);
}
