export interface navLinksTypes {
    id: string
    title: string
}

export interface featureTypes {
    index: number
    id: string
    icon: any
    title: string
    content: string
}

export interface feedbackTypes {
    id: string
    content: string
    name: string
    title: string
    img: any
}

export interface statsTypes {
    id: string
    title: string
    value: string
}

export interface footerLinksTypes {
    title: string
    links: {
        name: string
        link: string
    }[]
}

export interface socialMediaTypes {
    id: string
    icon: any
    link: string
}

export interface clientsTypes {
    id: string
    logo: any
}

export interface stylesTypes {
    boxWidth: string
    heading2: string
    paragraph: string
    flexCenter: string
    flexLeft: string
    flexStart: string
    paddingX: string
    paddingY: string
    padding: string
    marginX: string
    marginY: string
}

export interface layoutTypes {
    section: string
    sectionReverse: string
    sectionImgReverse: string
    sectionImg: string
    sectionInfo: string
}