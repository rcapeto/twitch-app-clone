import React from 'react';

import {
   List,
   StreamContainer,
   StreamThumbnail,
   StreamRow,
   StreamHeader,
   StreamAvatar,
   StreamUsername,
   StreamColumn,
   TagRow,
   TagView,
   TagText,
   StreamDescription,
   StreamCategory
} from './styles';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

const StreamList: React.FC = () => {
   const StreamItem: React.FC = () => {
      return(
         <StreamContainer>

            <StreamThumbnail source={streamThumbnail}/>

            <StreamColumn>

               <StreamRow>

                  <StreamHeader>
                     <StreamAvatar />
                     <StreamUsername numberOfLines={1}>rapha_capeto</StreamUsername>
                  </StreamHeader>

                  <StreamDescription numberOfLines={1}>
                    Front-end mobile with React-Native and TypeScript 
                  </StreamDescription>

                  <StreamCategory numberOfLines={1}>
                     Science & Tecnology
                  </StreamCategory>

               </StreamRow>

               <TagRow>
                  <TagView>
                     <TagText>Portuguese</TagText>
                  </TagView>

                  <TagView>
                     <TagText>Mobile Development</TagText>
                  </TagView>
               </TagRow>

            </StreamColumn>

         </StreamContainer>
      );
   }

   return(
     <List>
        <StreamItem />
        <StreamItem />
        <StreamItem />
        <StreamItem />
     </List>
  );
}

export default StreamList;