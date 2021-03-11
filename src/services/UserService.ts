import { BaseApiService } from '@/services/BaseApiService';
import { RegistrationData, SignInData } from '@/interfaces/UserInterface';

class UserService extends BaseApiService {
  registration(regData: RegistrationData): object {
    return this.callMethod('post', 'api/auth/sign-up', regData);
  }
  signIn(signInData: SignInData) {
    return this.callMethod('post', 'api/auth/sign-in', signInData);
  }
}

export default new UserService();
