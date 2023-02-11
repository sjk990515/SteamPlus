import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LayoutButton } from "../recoil/atom";
import Profile from "./layoutcomponents/Profile";
import GameSearch from "./layoutcomponents/GameSearch";
import Friend from "./layoutcomponents/Friend";
import FriendSearch from "./layoutcomponents/FriendSearch";
import VoiceTalk from "./layoutcomponents/VoiceTalk";

function Layout() {
  //레이아웃 종류
  const [layoutMenu, setLayoutMenu] = useRecoilState<String>(LayoutButton);

  const LayoutButtonOnClick = (i: string) => {
    if (layoutMenu === i) {
      setLayoutMenu("close");
    } else {
      setLayoutMenu(i);
    }
  };

  return (
    <>
      <SideBarDiv>
        {/* 프로필 */}
        <Profilebutton onClick={() => LayoutButtonOnClick("profile")}>
          Profile
        </Profilebutton>
        {/* 홈 */}
        <Homebutton>Home</Homebutton>
        {/* 게임검색 */}
        <GameSearchbutton onClick={() => LayoutButtonOnClick("gamesearch")}>
          gamesearch
        </GameSearchbutton>
        {/* 친구 */}
        <Friendbutton onClick={() => LayoutButtonOnClick("friend")}>
          friend
        </Friendbutton>
        {/* 친구검색
        <FriendSearchbutton onClick={() => LayoutButtonOnClick("friendsearch")}>
          friendsearch
        </FriendSearchbutton> */}
        {/* 음성채팅 */}
        <VoiceTalkbutton onClick={() => LayoutButtonOnClick("voicetalk")}>
          voicetalk
        </VoiceTalkbutton>
      </SideBarDiv>
      {/* 메뉴 컴포넌트 */}
      <MenuOpenDiv layoutMenu={layoutMenu}>
        {/* 위 제목과 input layoutstring이 바뀔때마다 바뀌게
        <MenuTitleDiv>
          <MenuTitleFlex>
            <MenuTitleH2>Dave Diver</MenuTitleH2>
            <MenuTitleLink></MenuTitleLink>
            <MenuTitleAdd>+</MenuTitleAdd>
          </MenuTitleFlex>

          <MenuTitleIform>
            <MenuTitleInput></MenuTitleInput>
            <MenuTitleButton>확인</MenuTitleButton>
          </MenuTitleIform>
        </MenuTitleDiv> */}

        <Profile />
        <GameSearch />
        <Friend />
        <FriendSearch />
        <VoiceTalk />
      </MenuOpenDiv>
    </>
  );
}

export default Layout;
const SideBarDiv = styled.div`
  width: 80px;
  height: 100%;
  position: fixed;
  background: #080c16;
  z-index: 9999;
`;

const MenuOpenDiv = styled.div<{ layoutMenu: String }>`
  width: 400px;
  height: 100%;
  background: #404b5e;
  position: fixed;
  left: ${(props) => (props.layoutMenu === "close" ? "-480px" : "80px")};
  top: 0;
  bottom: 0;
  transition: 0.5s ease-in-out;
  border-top-right-radius: 30px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Profilebutton = styled.div`
  margin: 20px auto 0;
  border-radius: 25px;
  font-size: 12px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  background: #ccc;
  cursor: pointer;
`;

const Homebutton = styled.div`
  margin: 20px auto 0;
  border-radius: 25px;
  font-size: 12px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  background: #ccc;
  cursor: pointer;
`;

const GameSearchbutton = styled.div`
  margin: 20px auto 0;
  border-radius: 25px;
  font-size: 12px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  background: #ccc;
  cursor: pointer;
`;

const Friendbutton = styled.div`
  margin: 20px auto 0;
  border-radius: 25px;
  font-size: 12px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  background: #ccc;
  cursor: pointer;
`;

const FriendSearchbutton = styled.div`
  margin: 20px auto 0;
  border-radius: 25px;
  font-size: 12px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  background: #ccc;
  cursor: pointer;
`;

const VoiceTalkbutton = styled.div`
  margin: 20px auto 0;
  border-radius: 25px;
  font-size: 12px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  background: #ccc;
  cursor: pointer;
`;
// json에 친구서버에 id, nickname, 프로필이미지
// 내 id 상대방 id
// ( 친구 추가기능 )
// {myId:123, friend: 777} 이게 한방향으로만 있으면 친구 요청 / 상대방입장에선 친구 수락 대기 / 거절 혹은 취소 누르면 삭제
// {myId:777, friend: 123}
// 위에 두개가 다있으면 친구내역으로.
// 양방향으로 있으면
// 추가기능 (친구)

//친구 검색은 앤터눌렀을때 그 input에 있는대로 필터가 돌아감

//방생성할때 클릭하면 height를 0으로 해놨다가 염