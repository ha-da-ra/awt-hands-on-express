export interface IBook {
    title: String,
    author: String,
    rating?: number,
    alreadyRead: boolean,
}

export const someBookExamples :IBook[] = [{
    alreadyRead: true,
    author: "C.S.Pacat",
    title: "Captive Prince",
    rating: 10,
  },{
    alreadyRead: true,
    author: "Ghost of Lies",
    title: "Alice Winters",
    rating: 8,
  },{
    alreadyRead: false,
    author: "Prince and Assassin",
    title: "Tavia Lark",
    rating: 9,
  }
]