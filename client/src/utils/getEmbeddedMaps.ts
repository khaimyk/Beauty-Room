export const getEmbeddedMapUrl = (city: string, address: string): string => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    console.error("Google Maps API key is missing")
    return ""
  }
  if (!city || !address) return ""

  const fullAddress = `${city}, ${address}`
  const encodedAddress = encodeURIComponent(fullAddress)
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`
}
