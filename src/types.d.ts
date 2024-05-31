interface TodoData {
  title: string;
  image: string;
  _id: number;
}

namespace TODO {
  type getReq = void;
  type postReq = {
    title;
    image;
  };
  type deleteReq = number;
}
