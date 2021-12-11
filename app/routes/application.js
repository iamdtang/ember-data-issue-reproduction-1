import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    this.store.push({
      data: {
        id: '2',
        type: 'comment',
        attributes: {
          body: 'Comment 1',
        },
      },
    });

    return this.store.push({
      data: {
        id: '1',
        type: 'post',
        attributes: {
          title: 'Post 1',
        },
        relationships: {
          comments: {
            data: [
              { id: '2', type: 'comment' },
              { id: '2', type: 'comment' },
              { id: '2', type: 'comment' },
              { id: '2', type: 'comment' },
              { id: '2', type: 'comment' },
              { id: '2', type: 'comment' },
            ],
          },
        },
      },
    });
  }
}
