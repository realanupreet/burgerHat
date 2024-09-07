import React, { useEffect, useReducer, useRef } from "react"
import { createClient } from "../utils/client"
import { useStaticData } from "../hooks/useStaticData"

export const defaultStoreContext = {
  adding: false,
  cart: {
    items: []
  },
  order: {},
  products: [],
  currencyCode: "eur",
  addVariantToCart: async () => {},
  createCart: async () => {},
  removeLineItem: async () => {},
  updateLineItem: async () => {},
  setShippingMethod: async () => {},
  updateAddress: async () => {},
  createPaymentSession: async () => {},
  completeCart: async () => {},
  retrieveOrder: async () => {},
  setPaymentSession: async () => {},
  dispatch: async () => {}
}

const StoreContext = React.createContext(defaultStoreContext)
export default StoreContext

const reducer = (state, action) => {
  switch (action.type) {
    case "setCart":
      return {
        ...state,
        cart: action.payload,
        currencyCode: action.payload.region.currency_code
      }
    case "setOrder":
      return {
        ...state,
        order: action.payload
      }
    case "setProducts":
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}

const client = createClient()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStoreContext)
  const stateCartId = useRef()

  useEffect(() => {
    stateCartId.current = state.cart.id
  }, [state.cart])

  useEffect(() => {
    let cartId = "cart_01GG01EDS3QEYAJMMF9EVC1YH8"
    // let cartId
    if (localStorage) {
      cartId = localStorage.getItem("cart_id")
    }

    if (cartId) {
      // client.carts.retrieve(cartId).then((data) => {
        dispatch({ type: "setCart", payload: useStaticData("cart") })
      // })
    } else {
      // client.carts.create({}).then((data) => {
        dispatch({ type: "setCart", payload: useStaticData("cart") })
        if (localStorage) {
          localStorage.setItem("cart_id", cartId)
        }
      // })
    }

    // client.products.list().then((data) => {
      dispatch({ type: "setProducts", payload: useStaticData() })
    // })
  }, [])

  const createCart = () => {
    // if (localStorage) {
    //   localStorage.removeItem("cart_id")
    // }
    // client.carts.create({}).then((data) => {
    //   dispatch({ type: "setCart", payload: data.cart })
    // })
  }

  const setPaymentSession = async (provider) => {
    // return await client.carts
    //   .setPaymentSession(state.cart.id, {
    //     provider_id: provider
    //   })
    //   .then((data) => {
    //     dispatch({ type: "setCart", payload: data.cart })
    //     return data
    //   })
  }

  const addVariantToCart = async ({ variantId, quantity }) => {
    // const products = useStaticData();
    // client.carts.lineItems
    //   .create(state.cart.id, {
    //     variant_id: variantId,
    //     quantity: quantity
    //   })
    //   .then((data) => {
    // console.log('state',state);
    // console.log('products',products);
    //     dispatch({ type: "setCart", payload: [...state.cart.items] })
      // })
    
      // const product = products.find((p) => p.id === params.id);
  }

  const removeLineItem = async (lineId) => {
    // client.carts.lineItems.delete(state.cart.id, lineId).then((data) => {
    //   dispatch({ type: "setCart", payload: data.cart })
    // })
  }

  const updateLineItem = async ({ lineId, quantity }) => {
    // client.carts.lineItems
    //   .update(state.cart.id, lineId, { quantity: quantity })
    //   .then((data) => {
    //     dispatch({ type: "setCart", payload: data.cart })
    //   })
  }

  const getShippingOptions = async () => {
    // const data = await client.shippingOptions
    //   .listCartOptions(state.cart.id)
    //   .then((res) => {
    //     return res.shipping_options
    //   })

    // if (data) {
    //   return data
    // } else {
    //   return undefined
    // }
  }

  const setShippingMethod = async (id) => {
    // return await client.carts
    //   .addShippingMethod(state.cart.id, {
    //     option_id: id
    //   })
    //   .then((data) => {
    //     dispatch({ type: "setCart", payload: data.cart })
    //   })
  }

  const createPaymentSession = async () => {
    // return await client.carts
    //   .createPaymentSessions(state.cart.id)
    //   .then((data) => {
    //     dispatch({ type: "setCart", payload: data.cart })
    //     return data
    //   })
  }

  const completeCart = async () => {
    // const data = await client.carts.complete(state.cart.id).then((data) => data)

    // if (data) {
    //   return data.data
    // } else {
    //   return undefined
    // }
  }

  const retrieveOrder = async (orderId) => {
    // const data = await client.orders.retrieve(orderId).then((data) => data)

    // if (data) {
    //   return data.order
    // } else {
    //   return undefined
    // }
  }

  const updateAddress = (address, email) => {
    // client.carts
    //   .update(state.cart.id, {
    //     shipping_address: address,
    //     billing_address: address,
    //     email: email
    //   })
    //   .then((data) => {
    //     dispatch({ type: "setCart", payload: data.cart })
    //   })
  }

  return (
    <StoreContext.Provider
      value={{
        ...state,
        addVariantToCart,
        createCart,
        removeLineItem,
        updateLineItem,
        getShippingOptions,
        setShippingMethod,
        createPaymentSession,
        setPaymentSession,
        updateAddress,
        completeCart,
        retrieveOrder,
        dispatch
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
