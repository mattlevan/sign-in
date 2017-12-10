import Vue from 'vue';
import SignIn from '@/components/SignIn';

describe('SignIn.vue', () => {
  const ids = ['name', 'email', 'telephone', 'company', 'officialVisit',
    'escortRequired'];
  ids.forEach((id) => {
    it('should render the sign in form ' + id, () => {
      const Constructor = Vue.extend(SignIn);
      const vm = new Constructor().$mount();
      expect(!!vm.$el.querySelector('#' + id))
      .toEqual(true);
    });
  });
});
