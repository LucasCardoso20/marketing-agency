import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '9luiiryd',
    dataset: 'production',
    apiVersion: '2022-05-23',
    useCdn: true,
    token: 'skMoY7XWVs7lb1To32rW8vMdn5P78TW57tR98F0Q5r4DKpppgL6SjBvHKufyO4dNhb2P27D8MmRiaTWuVARMc2PEp85GQLVNMJR8hCwoGQZWGZTNmJQPzf2ctn8CrtqZ83fqcQ89QMCn69QZ0wtBzovK2gTfLZS2OhrJDooOHLZHXvU254Xo'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)