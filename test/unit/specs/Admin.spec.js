import Vue from 'vue';
import Admin from '@/components/Admin';

describe('Admin.vue', () => {
  it('should render the admin password label', () => {
    const Constructor = Vue.extend(Admin);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.form-group label').textContent)
    .toEqual('Admin password: ');
  });
  it('should render the admin password input form', () => {
    const Constructor = Vue.extend(Admin);
    const vm = new Constructor().$mount();
    expect(!!vm.$el.querySelector('.form-group input'))
    .toEqual(true);
  });
  it('should render the admin password submit button', () => {
    const Constructor = Vue.extend(Admin);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('button').textContent)
    .toEqual('Submit');
  });
  it('should render the visitors table when admin is true', () => {
    const Constructor = Vue.extend(Admin);
    const vm = new Constructor().$mount();
    vm.admin = true;
    Vue.nextTick(() => {
      expect(!!vm.$el.querySelector('table'))
      .toEqual(true);
    });
  });
  it('should render the table headers when admin is true', () => {
    const Constructor = Vue.extend(Admin);
    const vm = new Constructor().$mount();
    const ids = ['name', 'email', 'telephone', 'company', 'officialVisit', 
      'escortRequired', 'escortName'];
    vm.admin = true;
    Vue.nextTick(() => {
      ids.forEach((id) => {
        expect(!!vm.$el.querySelector('table thead tr #' + id))
        .toEqual(true);
      });
    });
  });
});
