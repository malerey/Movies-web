import React from 'react';
import useFetch from '../../hooks/useFetch';
import { ShowMediaContainer } from './ShowMedia.style';
import CardContainer from '../../components/card-container/CardContainer';
import PaginationContainer from '../../components/pagination/PaginationContainer';

// no me vuelve loca el nombre mediaType, prefiero params, porque queda mas claro a primera vista
// de donde sale esa informacion. 
const ShowMedia = ({ mediaType, title }) => {

    // Trata de encontrar un nombre mas descritivo. Que quede clara la funcion de este objeto.
    const obj = {
        page: mediaType.numberPage,
        ...(mediaType.media === "search" && { query: mediaType.query }),
        ...(mediaType.media !== "search" && { with_genres: mediaType.query })
    };

    const isTrending = mediaType.mediagenres === 'trending';

    const propsFetch = isTrending ?
        [3, mediaType.mediagenres, mediaType.media, 'week']
        :
        (obj.with_genres ?
            [3, "discover", mediaType.media]
            :
            [3, mediaType.media, mediaType.mediagenres]);

    const data = useFetch(propsFetch, obj ? obj : "");

    return (
        <ShowMediaContainer>
            {data &&
                <>
                    <CardContainer
                        info={data.results}
                        title={title}
                        mediaType={mediaType.media}
                    />
                    <PaginationContainer totalPages={data.total_pages} />
                </>
            }
        </ShowMediaContainer>
    );
}

export default ShowMedia;
