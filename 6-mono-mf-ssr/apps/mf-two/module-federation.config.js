module.exports = {
  name: 'mf-two',
  exposes: {
    './Routes': 'apps/mf-two/src/app/app.routes.ts',
    './Component': 'apps/mf-two/src/app/remote-entry/entry.component.ts'
  },
};
