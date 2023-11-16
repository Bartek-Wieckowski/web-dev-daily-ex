import { toast } from 'react-toastify';

function notify(show = false, type = '', msg = '') {
  if (type === 'registered-success') {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (type === 'registered-reject') {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (type === 'login-success') {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (type === 'logout') {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (type === 'password-forgot') {
    toast.warning(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (type === 'user-deleted') {
    toast.warning(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}

export { notify };
