import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return createUser().then(
    (user) => uploadPhoto().then((photo) => console.log(`${photo.body} ${user.firstName} ${user.lastName}`)),
  ).catch(() => console.log('Signup system offline'));
}
