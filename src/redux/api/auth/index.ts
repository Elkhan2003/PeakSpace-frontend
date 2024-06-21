import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query<AUTH.GetMeResponse, AUTH.GetMeRequest>({
			query: () => ({
				url: '/user-infos',
				method: 'GET'
			}),
			providesTags: ['auth']
		}),
		postLogin: build.mutation<AUTH.PostLoginResponse, AUTH.PostLoginRequest>({
			query: (loginData) => ({
				url: '/auth/signIn',
				method: 'POST',
				body: loginData
			}),
			invalidatesTags: ['auth']
		}),
		postRegistration: build.mutation<
			AUTH.PostRegistrationResponse,
			AUTH.PostRegistrationRequest
		>({
			query: (registrationData) => ({
				url: '/auth/signUp',
				method: 'POST',
				body: registrationData
			}),
			invalidatesTags: ['auth']
		}),
		postLogout: build.mutation<AUTH.PostLogoutResponse, AUTH.PostLogoutRequest>(
			{
				query: () => ({
					url: '/auth/logout',
					method: 'POST'
				}),
				invalidatesTags: ['auth']
			}
		)
	})
});
export const {
	useGetMeQuery,
	usePostLoginMutation,
	usePostRegistrationMutation,
	usePostLogoutMutation
} = api;
