import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://the-trivia-api.com/v1' }),
    endpoints: (builder) => ({
        getQuestions: builder.query({
            query: () => '/questions',
        }),
    }),
});

export const { useGetQuestionsQuery } = quizApi;
// export default quizApi;
export default quizApi;
