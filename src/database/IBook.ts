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
  },{
    alreadyRead: false,
    author: "George Orwell",
    title: "1984",
    rating: 9,
  },{
    alreadyRead: true,
    author: "Tim Marshall",
    title: "Prisoners of Geography",
    rating: 9,
  },{
    alreadyRead: false,
    author: "Randall Munroe",
    title: "what if? 2",
    rating: 9,
  },{
    alreadyRead: false,
    author: "Stephen Hawking",
    title: "Eine kurze Geschichte der Zeit",
    rating: 9,
  },
  
]