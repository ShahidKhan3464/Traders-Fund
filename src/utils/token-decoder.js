import { jwtDecode } from 'jwt-decode';

export function handleToken(token) {
  const decoded = jwtDecode(token);
  console.log(decoded);
  switch (decoded.sub) {
    case 'auth-login':
      return {
        auth: true
      };
    case 'account-verification':
      return {
        pendingAccountVerification: true
      };
    case 'reset-password':
      return {
        pendingResetPassword: true
      };
    case 'two-fa-login':
      return {
        pendingTwoFa: true
      };
  }
}
