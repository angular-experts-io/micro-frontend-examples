module.exports = {
  name: 'mf-one',
  exposes: {
    './Routes': 'apps/mf-one/src/app/app.routes.ts',
    './Component': 'apps/mf-one/src/app/remote-entry/entry.component.ts'
  },
};
