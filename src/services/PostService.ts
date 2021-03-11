import { BaseApiService } from '@/services/BaseApiService';

class PostService extends BaseApiService {
  posts() {
    return this.callMethod('get', '/api/Twith');
  }
  post(content: object) {
    return this.callMethod('post', '/api/Twith', content);
  }
  like(id: number) {
    return this.callMethod('post', `/api/Twith/${id}/like`);
  }
}

export default new PostService();
