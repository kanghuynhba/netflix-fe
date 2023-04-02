import * as httpRequest from '~/utils/httpRequest';
const apiKey = process.env.REACT_APP_API_KEY;
export const row = async (rowGenres = '', api_key = apiKey, language = 'en_US') => {
    try {
        const res = await httpRequest.get(rowGenres, {
            params: {
                api_key,
                language,
            },
        });
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
