import { useState, useRef } from 'react'
import axios from 'axios'
import { useGlobal } from '../context/globalContext'
import API_URL from '../config/api'

function useApi(sucess = null, fail = null, submitToken = true) {
  const { global } = useGlobal()
  const [response, setResponse] = useState(null)
  const loading = useRef(false)

  const request = (url, method, data, navigate = null) => {
    if (loading.current === true) return

    setResponse('loading')

    loading.current = true

    const headers = submitToken
      ? {
          Authorization: `Bearer ${global.token}`
        }
      : null

    const config = { baseURL: API_URL, url, method, headers, data }

    const promise = axios.request(config)

    promise
      .then(res => res.data)
      .then(res =>
        sucess !== null
          ? sucess({ res, setResponse, global, navigate })
          : setResponse(res)
      )

    promise
      .catch(res => res.response)
      .then(res =>
        fail !== null ? fail({ res, setResponse, navigate }) : setResponse(null)
      )

    promise.finally(() => (loading.current = false))
  }

  return { response, setResponse, request }
}

export default useApi
