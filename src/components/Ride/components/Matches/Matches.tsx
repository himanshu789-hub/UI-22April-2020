import * as React from "react";
import OfferCard from "../../../OfferCard/OfferCard";
import BookDTO from "../../../../models/Booking";
import './css/styles.css';
import OfferDTO from "../../../../models/Offerring";

interface IMatches {
  Offers: Array<OfferDTO>;
  Book: BookDTO;
  history: any;
  location: any;
  match: any;
}

function Matches(props: IMatches) {
  let { Offers: offers, Book: book } = props;
  if (offers == null && book == null)
    return <></>;

  else {
    const offersRender = offers.map((e, index) => {
      return (
        <OfferCard {...props} BookRequest={book}
          IsOnUpdate={false}
          Offer={e}
        ></OfferCard>
      );
    });
    return (
      <div id="matches">
        <div id="matchesLabel">Your Matches</div>
        <div id="allmatches">{offersRender}</div>
      </div>
    );

  }
}

export default Matches;
