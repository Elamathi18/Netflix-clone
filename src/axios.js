import axios from "axios";

/*base url to make request to the movie database  */
const instance=axios.create({
    baseURL:"http://api.themoviedb.org/3"
});

// instance.get('/foo-bar');

//http://api.themoviedb.org/3/foo-bar
export default instance;

//we can only one defult in a file.