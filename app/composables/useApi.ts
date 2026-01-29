export const useApi = <T>(url: string, options: any = {}) => {
  const config = useRuntimeConfig()

  const defaults: any = {
    baseURL: config.public.apiBase,
    // key: url, // Optional: key for deduplication if needed
    headers: options.headers ? { ...options.headers } : {},

    onRequest({ request, options }: any) {
      // Add Authorization header if token exists
      // const token = useCookie('auth_token')
      // if (token.value) {
      //   options.headers.Authorization = `Bearer ${token.value}`
      // }
    },

    onRequestError({ request, options, error }: any) {
      // Handle request errors
      console.error('API Request Error:', error)
    },

    onResponse({ request, response, options }: any) {
      // Process successful responses
      // if (response._data?.code !== 200) {
      //    // Handle API level errors specific to your backend structure
      // }
    },

    onResponseError({ request, response, options }: any) {
      // Handle response errors (4xx, 5xx)
      console.error('API Response Error:', response.status, response.statusText)

      // Example: Redirect to login on 401
      // if (response.status === 401) {
      //   navigateTo('/login')
      // }
    }
  }

  // Merge options with defaults
  const params = {
    ...defaults,
    ...options,
    headers: {
      ...defaults.headers,
      ...options.headers
    }
  }

  return useFetch<T>(url, params)
}

// Utility to create a simple repository pattern if preferred
export const useApiRepository = (resource: string) => {
    return {
        getAll: (params?: any) => useApi(resource, { params }),
        get: (id: string | number) => useApi(`${resource}/${id}`),
        create: (payload: any) => useApi(resource, { method: 'POST', body: payload }),
        update: (id: string | number, payload: any) => useApi(`${resource}/${id}`, { method: 'PUT', body: payload }),
        delete: (id: string | number) => useApi(`${resource}/${id}`, { method: 'DELETE' })
    }
}
