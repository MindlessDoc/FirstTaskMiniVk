import React from "react";
import ReactDOM from "react-dom";
import {
    AdaptivityProvider,
    ConfigProvider,
    useAdaptivity,
    AppRoot,
    SplitLayout,
    SplitCol,
    ViewWidth,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell,
    Title,
    Text,
    Div,
    Avatar,
    Button,
    UsersStack,
    RichCell,
    PanelHeaderBack,
    Search,
    Cell,
    Spinner,
    TabsItem,
    Tabs,
    VKCOM,
    CellButton,
    withAdaptivity, withPlatform, SizeType, PanelHeaderContent, PanelHeaderButton, Counter, PanelHeaderClose, Root

} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {
    Icon16Add,
    Icon16Like,
    Icon28MusicOutline, Icon28Notifications,
    Icon28PictureOutline, Icon28SettingsOutline,
    Icon28UserOutline,
    Icon28UsersOutline
} from "@vkontakte/icons";

function getAvatarUrl(audioArcticMonkeys) {
    
}


const App = () => {
  const { viewWidth } = useAdaptivity();

  return (
      <AppRoot>
        <SplitLayout header={<PanelHeader separator={false} />}>
          <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
              <PanelHeader>FTIT</PanelHeader>
              <Title level="2" weight="heavy" style={{ marginBottom: 16 }}>Вас приветствует команда FTIT!!!</Title>
              <Group>
                  <Header>Участники:</Header>
                  <Header mode="secondary">Full-stack developer</Header>
                  <SimpleCell
                      description="VK"
                      before={<Avatar src='https://sun9-55.userapi.com/impg/VNz-ERweSiFQOR4rDyrXHpD-dIuzZMn6Jt3FXA/Q1jB9XPICQ8.jpg?size=2560x2117&quality=96&sign=721b8598caa165cc51d3f7817dd81115&type=album'/>}
                  >
                      Илья Самойлов
                  </SimpleCell>
                  <Header mode="secondary">Backend developer</Header>
                  <SimpleCell
                      description="VK"
                      before={<Avatar src="https://sun9-47.userapi.com/impg/GZOUOH56K_o2EY9m8teFRWZw4vAk5l-qTxMzzg/nQYh_5B9cCQ.jpg?size=2560x1704&quality=96&sign=1c92d93d6e844b6f8a034529e93028dd&type=album"/>}
                  >
                      Тимофей Козлов
                  </SimpleCell>
                  <Header mode="secondary">Backend developer</Header>
                  <SimpleCell
                      description="VK"
                      before={<Avatar src="https://sun9-77.userapi.com/impg/8_qXyokxhvUcucTrxLF_PEybcn2yb_TkFvYxLA/qDkUb8RLIpY.jpg?size=768x1024&quality=96&sign=86336bbe015b3305c1d1b96096bf1c25&type=album"/>}
                  >
                      Филипп Захаров
                  </SimpleCell>
                  <Header mode="secondary">Analyst</Header>
                  <SimpleCell
                      description="VK"
                      before={<Avatar src="https://sun9-45.userapi.com/impg/lOSrnSoJFkEkeW-fN8ZdJf3j5QfAJUb-YXnosQ/7ml4g1Z9bFU.jpg?size=2160x2160&quality=96&sign=832e32f5f5edb9a3b9cc4f83aca8a557&type=album"/>}
                  >
                      Тимофей Чернов
                  </SimpleCell>

              </Group>
          </SplitCol>
        </SplitLayout>

      </AppRoot>
  );
};

export default App;