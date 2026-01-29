export const useMovieApi = () => {
    return {
        getTrending: () => useApi('/movies/trending'),
        getTopRated: () => useApi('/movies/top-rated'),
        getDetail: (id: string) => useApi(`/movies/${id}`),
        search: (query: string) => useApi('/movies/search', { params: { q: query } }),
        getByGenre: (genre: string) => useApi(`/movies/genre/${genre}`),
    }
}

export const useAuthApi = () => {
    return {
        login: (credentials: any) => useApi('/auth/login', { method: 'POST', body: credentials }),
        register: (data: any) => useApi('/auth/register', { method: 'POST', body: data }),
        getProfile: () => useApi('/auth/me'),
        logout: () => useApi('/auth/logout', { method: 'POST' }),
    }
}
