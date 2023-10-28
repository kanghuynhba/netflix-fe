import * as httpRequest from '~/utils/httpRequest';
const apiKey = process.env.REACT_APP_API_KEY;
export const trailer = async (type = '', id = '', api_key = apiKey, language = 'en_US') => {
    try {
        const res = await httpRequest.get(`/${type}/${id}/videos`, {
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
