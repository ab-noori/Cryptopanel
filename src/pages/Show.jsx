import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../redux/DetailsSlice';
import DetailsView from '../components/DetailsView';

const Show = () => {
  const CurrencyDetails = useSelector((state) => state.CurrencyDetails.CurrencyDetails);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <DetailsView
        name={CurrencyDetails?.name}
        symbol={CurrencyDetails?.symbol}
        marketCapRank={CurrencyDetails?.market_cap_rank}
        high24h={CurrencyDetails?.market_data?.high_24h?.usd}
        low24h={CurrencyDetails?.market_data?.low_24h?.usd}
        ath={CurrencyDetails?.market_data?.ath?.usd}
        atl={CurrencyDetails?.market_data?.atl?.usd}
        marketCap={CurrencyDetails?.market_data?.market_cap?.usd}
        marketCapChange24h={CurrencyDetails?.market_data?.market_cap_change_24h_in_currency?.usd}
        marketCapChangePercentage24={
          CurrencyDetails?.market_data?.market_cap_change_percentage_24h_in_currency?.usd
        }
        priceChange24h={CurrencyDetails?.market_data?.price_change_24h_in_currency?.usd}
        priceChangePercentage24h={
          CurrencyDetails?.market_data?.price_change_percentage_24h_in_currency?.usd
        }
        currentPrice={CurrencyDetails?.market_data?.current_price?.usd}
        athChangePercentage={CurrencyDetails?.market_data?.ath_change_percentage?.usd}
        atlChangePercentage={CurrencyDetails?.market_data?.atl_change_percentage?.usd}
        fullyDilutedValuation={CurrencyDetails?.market_data?.fully_diluted_valuation?.usd}
        totalVolume={CurrencyDetails?.market_data?.total_volume?.usd}
        totalSupply={CurrencyDetails?.market_data?.total_supply}
        circulatingSupply={CurrencyDetails?.market_data?.circulating_supply}
        maxSupply={CurrencyDetails?.market_data?.max_supply}
        publicInterestScore={CurrencyDetails?.public_interest_score}
      />
    </>
  );
};
export default Show;
