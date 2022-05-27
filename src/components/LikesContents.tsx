import { VFC } from 'react'

interface Props {}

type SectionItem = {
  href: string
  text: string
}

type Section = {
  title: string
  href?: string
  items: SectionItem[]
}

const sections: Section[] = [
  {
    title: 'Devices',
    items: [
      {
        href: 'https://www.apple.com/jp/',
        text: 'MacBook Pro',
      },
      {
        href: 'https://www.dell.com/ja-jp/shop/dell-u4021qw-40%E3%82%A4%E3%83%B3%E3%83%81%E3%83%AF%E3%82%A4%E3%83%89%E6%9B%B2%E9%9D%A2usb-c-hub-%E3%83%A2%E3%83%8B%E3%82%BF-5k2k-21-9-ips%E9%9D%9E%E5%85%89%E6%B2%A2-tbhdmix2dprj45-%E9%AB%98%E3%81%95%E8%AA%BF%E6%95%B4/apd/210-aypy/%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC-%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B5%E3%83%AA%E3%83%BC',
        text: 'Dell U4021QW',
      },
      {
        href: 'https://www.kensington.com/ja-jp/p/%E8%A3%BD%E5%93%81/%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB/%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%83%9C%E3%83%BC%E3%83%AB/%E3%82%A8%E3%82%AD%E3%82%B9%E3%83%91%E3%83%BC%E3%83%88%E3%83%9E%E3%82%A6%E3%82%B9-%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%83%9C%E3%83%BC%E3%83%AB/',
        text: 'Expert Mouse',
      },
      {
        href: 'https://archisite.co.jp/products/mistel/barocco-md770-rgb-bt/',
        text: 'BAROCCO MD770',
      },
      {
        href: 'https://www.elgato.com/ja/gaming/stream-deck-xl',
        text: 'Stream Deck XL',
      },
      {
        href: 'https://store.google.com/jp/category/phones',
        text: 'Google Pixel',
      },
      {
        href: 'https://aftershokz.jp/products/bone-conduction-headphone-opencomm',
        text: 'OpenComm AfterShokz',
      },
    ],
  },
  {
    title: 'Setapp',
    href: 'https://setapp.com/',
    items: [
      {
        href: 'https://www.macbartender.com/',
        text: 'Bartender',
      },
      {
        href: 'https://macpaw.com/cleanmymac',
        text: 'CleanMyMac X',
      },
      {
        href: 'https://cleanshot.com/',
        text: 'CleanShot X',
      },
      {
        href: 'https://kapeli.com/dash',
        text: 'Dash',
      },
      {
        href: 'https://devutils.app/',
        text: 'DevUtils',
      },
      {
        href: 'https://www.flinto.com/',
        text: 'Flinto',
      },
      {
        href: 'https://binarynights.com/',
        text: 'ForkLift',
      },
      {
        href: 'https://bjango.com/mac/istatmenus/',
        text: 'iStat Menus',
      },
      {
        href: 'https://www.jetsoncreative.com/aerial',
        text: 'Magic Window Air',
      },
      {
        href: 'https://marked2app.com/',
        text: 'Marked',
      },
      {
        href: 'https://neededapps.com/metaimage/',
        text: 'MetaImage',
      },
      {
        href: 'https://numi.app/',
        text: 'Numi',
      },
      {
        href: 'https://pasteapp.io/',
        text: 'Paste',
      },
      {
        href: 'https://paw.cloud/',
        text: 'Paw',
      },
      {
        href: 'https://www.renfei.org/snippets-lab/',
        text: 'SnippetsLab',
      },
      {
        href: 'https://typefaceapp.com/',
        text: 'Typeface',
      },
      {
        href: 'https://www.intuitibits.com/products/wifiexplorer/',
        text: 'WiFi Explorer',
      },
    ],
  },
  {
    title: 'Apps',
    items: [
      {
        href: 'https://app.asana.com/',
        text: 'Asana',
      },
      {
        href: 'https://www.alfredapp.com/',
        text: 'Alfred',
      },
      {
        href: 'https://bitwarden.com/',
        text: 'Bitwarden',
      },
      {
        href: 'https://coteditor.com/',
        text: 'CotEditor',
      },
      {
        href: 'https://daisydiskapp.com/',
        text: 'DaisyDisk',
      },
      {
        href: 'https://www.deepl.com/ja/translator',
        text: 'DeepL',
      },
      {
        href: 'http://displaymenu.milchimgemuesefach.de/',
        text: 'Display Menu',
      },
      {
        href: 'https://www.dropbox.com/',
        text: 'Dropbox',
      },
      {
        href: 'https://pilotmoon.com/dropshelf/',
        text: 'Dropshelf',
      },
      {
        href: 'https://www.figma.com/',
        text: 'Figma',
      },
      {
        href: 'https://apps.apple.com/jp/app/gestimer/id990588172',
        text: 'Gestimer',
      },
      {
        href: 'https://giphy.com/apps/giphycapture',
        text: 'GIPHY CAPTURE',
      },
      {
        href: 'https://peacockmedia.software/mac/integrity-plus/',
        text: 'Integrity plus',
      },
      {
        href: 'https://iterm2.com/',
        text: 'iTerm',
      },
      {
        href: 'https://kaleidoscope.app/',
        text: 'Kaleidoscope',
      },
      {
        href: 'https://www.keka.io/',
        text: 'Keka',
      },
      {
        href: 'https://magnet.crowdcafe.com/',
        text: 'Magnet',
      },
      {
        href: 'https://www.notion.so/',
        text: 'Notion',
      },
      {
        href: 'https://pinegrow.com/',
        text: 'Pinegrow',
      },
      {
        href: 'https://www.pixelmator.com/pro/',
        text: 'Pixelmator Pro',
      },
      {
        href: 'http://sequelpro.com/',
        text: 'Sequel Pro',
      },
      {
        href: 'https://sparkmailapp.com/',
        text: 'Spark',
      },
      {
        href: 'https://www.sublimemerge.com/',
        text: 'Sublime Merge',
      },
      {
        href: 'https://toggl.com/track/',
        text: 'Toggl Track',
      },
      {
        href: 'https://code.visualstudio.com/',
        text: 'Visual Studio Code',
      },
    ],
  },
  {
    title: 'VS Code Extensions',
    items: [
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2',
        text: 'Bracket Pair Colorizer 2',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case',
        text: 'change-case',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize',
        text: 'colorize',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv',
        text: 'Edit csvPreview',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig',
        text: 'EditorConfig for VS Code',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=agutierrezr.emmet-keybindings',
        text: 'Emmet Keybindings',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
        text: 'ESLint',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory',
        text: 'Git History',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=letmaik.git-tree-compare',
        text: 'Git Tree Compare',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot',
        text: 'GitHub CopilotPreview',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github',
        text: 'GitHub Pull Requests and IssuesPreview',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        text: 'GitLens — Git supercharged',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint',
        text: 'HTMLHint',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview',
        text: 'Image preview',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost',
        text: 'Import Cost',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server',
        text: 'Live PreviewPreview',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme',
        text: 'Material Icon Theme',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command',
        text: 'multi-command',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=donjayamanne.typescript-notebook',
        text: 'Node.js Notebooks (REPL)',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai',
        text: 'One Monokai Theme',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff',
        text: 'Partial Diff',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
        text: 'Path Intellisense',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
        text: 'Prettier - Code formatter',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv',
        text: 'Rainbow CSV',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode',
        text: 'SonarLint',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
        text: 'Tailwind CSS IntelliSensePreview',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree',
        text: 'Todo Tree',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
        text: 'Trailing Spaces',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=bibhasdn.unique-lines',
        text: 'Unique Lines',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=vscodevim.vim',
        text: 'Vim',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode',
        text: 'Visual Studio IntelliCode',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=tomoki1207.vscode-input-sequence',
        text: 'vscode-input-sequence',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime',
        text: 'WakaTime',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint',
        text: 'webhint',
      },
      {
        href: 'https://marketplace.visualstudio.com/items?itemName=ICS.japanese-proofreading',
        text: 'テキスト校正くん',
      },
    ],
  },
]

const LikesContents: VFC<Props> = () => {
  return (
    <>
      {sections.map((section, i) => (
        <div key={i}>
          <h3 className="c-sub2title">
            {section.href ? (
              <a
                className="u-text-link"
                href={section.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {section.title}
              </a>
            ) : (
              section.title
            )}
          </h3>
          <ul className="c-inline-list --small">
            {section.items.map((item, j) => (
              <li key={j}>
                <a
                  className="u-text-link"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default LikesContents
