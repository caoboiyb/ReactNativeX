import MovieSchema from './schema/movie';

const Realm = require('realm');

const realm = new Realm({ schema: [MovieSchema] });

export default realm;
