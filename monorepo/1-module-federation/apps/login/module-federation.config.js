module.exports = {
  name: 'login',
  exposes: {
    './Module': 'apps/login/src/app/remote-entry/entry.module.ts',
    './Hello': 'apps/login/src/app/hello-world.component.ts',
    './Component': 'apps/login/src/app/remote-entry/entry.component.ts',
  },
};
