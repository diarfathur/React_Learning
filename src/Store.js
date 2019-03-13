import createStore from "unistore";
import axios from "axios";

// state yang akan digunakan dimasukan ke dalam variabel dulu
const initialState = {
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false,
    listNews: [],
    topNews: [],
    search: ""
};

const apiKey = 'e74dfabd2d864debb564eea6a21bd7ee';
const baseUrl = 'https://newsapi.org/v2/everything'

const cari = 'indonesia'
const urlNews = baseUrl + '?q=' + cari + '&pageSize=5&apiKey=' + apiKey
const urlTopNews = 'https://newsapi.org/v2/top-headlines?q=top&pageSize=5&apiKey=' + apiKey

// membuat store untuk state
export const store = createStore(initialState)

export const actions = store => ({
    //action hanya bisa me-return perubahan state
    setField: (state, event) => {
        
        return {
            [event.target.name]: event.target.value
        };
    },
    //user logout
    postLogout: state => {
        return { is_login: false };
    },
    //user login
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password
        }
        await axios
            .post("https://pingpong.free.beeceptor.com/login", data)
            .then(response => {
                console.log("postLogin.resp", response.data);
                if (response.data.hasOwnProperty("api_key")) {
                    //menyimpan nilai state baru ke store
                    store.setState({
                        api_key: response.data.api_key,
                        full_name: response.data.full_name,
                        email: response.data.email,
                        is_login: true
                    })
                }
                console.log(response.data.api_key);
            })
            .catch(function (error) {
                console.log(error)
            });
    },

    //Halaman Blog
    getNews: async state => {
        await axios
            .get(urlNews)
            .then(function (response) {
                store.setState({ listNews: response.data.articles })
            })
            .catch(function (error) {
                console.log(error);
            });

        // await axios
        //     .get(urlTopNews)
        //     .then(function (response) {
        //         store.setState({ topNews: response.data.articles })
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    },

    getTopNews: async state => {
        await axios
            .get(urlTopNews)
            .then(function (response) {
                store.setState({ topNews: response.data.articles })
                // console.log(this.state.topNews);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    
    searchNews: async (state, keyword) => {
        console.log("search News", keyword)

        if (keyword.length > 2) {
            try {
                const response = await axios.get(
                    baseUrl + "?q=" + keyword + "&pagesize=5&apiKey=" + apiKey
                );
                console.log(response);
                store.setState({ listNews: response.data.articles })
            }
            catch (error) {
                console.error(error);
            }
        }
    }
})

