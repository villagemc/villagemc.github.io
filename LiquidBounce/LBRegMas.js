descriptionCheatsArr = [
	'Derp — голову вашего персонажа начинает трясти.',
	'SkinDerp — включение\\отключение вашего скина.',
	'AutoBreak — персонаж начинает заниматься автокопанием',
	'ChestAura — автоматическое открытие сундуков в определенном радиусе и автоматическое перенесение предметов с сундука в инвентарь персонажа.',
	'ChestStealer — при открытии сундука автоматически забирает все вещи из него, а так же закрывает.',
	'CivBreak — при ударе по блоку персонаж доламывает этот же блок до конца.',
	'FastBreak — быстрое разрушение блоков.',
	'FastPlace — позволяет устанавливать блоки в 5 раз быстрее.',
	'Fucker — автоматическое разрушение кровати/яйца в определенном радиусе от персонажа.',
	'Luquids — возможность поставить или сломать блоки на воде или лаве.',
	'NoSlowBreak — стандартное разрушение блоков вне зависимости от того, в каком состоянии (прыгучем/летучем) персонаж находится.',
	'Nuker — разрушение блоков рядом с персонажем.',
	'Scaffold — быстрое строительство, блоки ставятся под персонажем автоматически.',
	'Timer — изменение скорости игры, вся игра и процессы в ней будут идти быстрее, персонаж может изменить коэффициент ускорения\\замедления.',
	'Tower — быстрое перемещение вашего персонажа вверх, при помощи блоков.',
	'Players — включенные читы будут реагировать/действовать на игроков.',
	'Mobs — включенные читы будут реагировать/действовать на мобов.',
	'Animals — включенные читы будут реагировать/действовать на анимацию игры.',
	'Invisible — включенные читы будут реагировать/действовать на невидимок в игре.',
	'Dead — включенные читы будут реагировать/действовать на «мертвецов» в игре.',
	'AntiBot — чит не будет реагировать на ботов, которые создает античит.',
	'AtAllProvider — отправление в чат сообщение для каждого игрока, место ника в вашей фразе помечается как @a.',
	'ComponentOnHover — при наведении на место сообщения в чате, которое активируется на ЛКМ, показывает что оно делает.',
	'LiquidChat — чат в чит-клиенте LiquidBounce.',
	'MidClick — удаление\\добавление в друзья путем клика по игрокам колесиком мыши.',
	'NameProtect — смена отображения никнейма Вашего персонажа на установленный никнейм.',
	'NoRotatetSet — функция блокирует возможность разворота при нанесении ударов, например, при включении KillAura.',
	'ResoursePackSpoof — подача ложной информации серверу о якобы скаченном ресурспаке, хотя играешь без него.',
	'Spammer — при включении этой функции в чат отправляются установленные сообщения.',
	'Teams — установленные читы не реагируют/действуют на тиммейтов в игре.',
	'AntiAFK — программный алгоритм действий, записанный создалетем софта. Персонажа не кикнет из-за AFK.',
	'AntiCactus — персонаж не получает урон от кактуса.',
	'AutoRespawn — автоматическое возрождение персонажа после смерти.',
	'AutoTool — автоматически меняет инструмент в руке на тот, который лучше подходит для крушения блока.',
	'Blink — задержка пакетов перемещения вашего персонажа. В игре видят так, будто у Вас жуткие лаги.',
	'Eagle — имитация чита FastBridge.',
	'FastUse — отключение времени на использование предметов. С лука персонаж будет стрелять, как с пулемета, или мгновенно кушать.',
	'InventoryCleaner — cкидывание или сохранение предметов из инвентаря, настроить блоки можно прописав в чат .inventorycleaner.',
	'KeepAlive — функция, при которой персонаж может/пытается вылечить игрока во время смерти, тем самым вызвав баг, когда труп игрока может ходить',
	'NoFall — при падении персонаж не получает урон.',
	'Reach — изменение дистанции атаки/взаимодействия.',
	'Regen — быстрая регенерация количества здоровья персонажа при критическом уровне.',
	'Zoot — простая функция, которая убирает негативные эффекты.',
	'AirJump/WaterJump — совершение прыжка в любой момент, в воздухе/по воде.',
	'AirLadder — возможность ползти пр лестнице и лиане, не касаясь их.',
	'AutoWalk — автоматическая ходьба.',
	'BlockWalk — персонаж ходит по полублокам/коврам снега или шерсти, как по полноценным блокам.',
	'BufferSpeed — увеличение скорости движения на цельных лестницах и полублоках.',
	'BugUp — возвращение персонажа назад, когда ты пролетел вниз определенную дистанцию',
	'FastClimb — быстрый подъем по лестницам.',
	'FastStairs — увеличение скорости передвижения по цельным блокам лестницы.',
	'Fly — функция, которая позволяет персонажу летать.',
	'Freeze — во время игры персонажа начинает сильно фризить/трясти.',
	'HighJump/BunnyJump — прыжок, совершенный персонажем, будет гораздо выше стандартного.',
	'IceSpeed — установленная скорость на льду.',
	'InventoryMove/InventoryWalk  — персонаж может перемещаться, когда у него открыт инвентарь.',
	'LadderJump  — при разгоне, поднимаясь по лестнице, а затем ‘вылетает’ c лестницы, обходя ее, чтобы сохранить свою скорость.',
	'LiquidWalk — пересонаж может ходить, прыгуче, по воде.',
	'LongJump — очень полезная функция, которая делает обычный прыжок очень длинным.',
	'NoClip — режим полёта\\прохождения сквозь стены.',
	'NoJumpDelay — убирает задержку прыжков при зажатии пробела. Например, если над головой блоки и зажат пробел, игрок начнет быстро прыгать, и не нужно спамить пробелом самому.',
	'NoSlow — функция отключает замедление, к примеру, при стрельбе с лука, хождению с шифтом или когда персонаж будет есть.',
	'NoWeb — в паутине вы будете двигаться без замедления.',
	'Parkour — осуществление прыжка с конца блока.',
	'PerfectHorseJump — идеальные прыжки на лошади.',
	'ReverseStep — увеличивает скорость падения с блоков (на прыжок не действует).',
	'SafeWalk — данная функция не дает вам упасть с блока, даже если вы идете не присев.',
	'SlimeJump — увеличивается сила откидывания от слаймового блока.',
	'Sneak — персонаж может бегать на шифте.',
	'Speed — функция позволяет быстро ходить или бегать, обычно это банихоп или просто жесткое ускорение.',
	'Step — мгновенно поднимается на полный блок при соприкосновении.',
	'Strafe — более гибкий контроль движений в воздухе.',
	'WallClimb — хождение по стенам на сервере.',
	'WaterSpeed — быстрое хождение по воде.',
	'AntiBlind — при возможности функция позволяет убрать эффекты слепоты и тошноты.',
	'BlockESP — у указанных блоков на время появляется обводка/свечение через другие блоки.',
	'BlockOverlay — накладывание обводки на блок, на который обращен взор персонажа.',
	'BreadCrumbs — интересный мод, который добавит в игру хлебные крошки и специальных мешок для них. Автоматически, каждые 10 блоков, крошки будут оставляться на земле, тем самым представляя собой своеобразную систему навигации.',
	'CameraClip — допустимость просмотра за стены при виде от 3-его лица.',
	'Chams — обводка с заливкой игроков/животных/мобов',
	'ClickGUI — при клике включится графический интерфейс.',
	'ESP — чит, который позволяет персонажу видеть, в какой части карты находится противник.',
	'FreeCam — камера свободного перемещения. Мод FreeCam позволит отделить камеру от персонажа и управлять ею независимо от тела.',
	'FullBright — активация читерской яркости, ночное зрение.',
	'HUD — отображение худа чит клиента, включенные функции, координаты, FPS и т.д.',
	'ItemESP — просматривание предметов сквозь стены.',
	'NameTags — просматривание никнеймов игроков на большом расстоянии, даже если они крадутся.',
	'NoBob — отключение пошатывании камеры.',
	'NoFOV — исчезновение эффекта рыбьего глаза во время принятия зелья скорости.',
	'NoHurtCam — отключение эффекта тряски экрана, когда персонаж получил травму.',
	'NoScoreboard — отключение Scoreboard на сервере.',
	'NoSwing — визуальное отключение анимации движения руки.',
	'Projectiles — указание траектории полета стрел, снежков, яиц.',
	'ProphuntESP — в мини-игре HideAndSeek через стены показывает фэйковые блоки.',
	'Rotations — с F5 персонаж видит движения головы читом, например, киллаурой.',
	'ChestESP/StorageESP — появление преимущества видеть сквозь определенные блоки: сундук, эндер-сундук, стол зачарования.',
	'TNTESP — подсвечивание TNT-блоков.',
	'Tracers — просмотр примерного положения игроков с помощью линий, даже если они сзади.',
	'TrueSight — возможность видеть невидимые объекты.',
	'X-Ray — возможность видеть сквозь блоки, чтобы обнаружить ценные руды, пещеры и много других вещей.',
	'AbortBreaking — прерывание разрушения блоков персонажем.',
	'AntiHunger — уменьшает голод за счет подмены земли и отмены спринт-пакетов',
	'BedGodMode — при нажатии на кровать персонаж может лечь в другом месте.',
	'Clip  — вертикальная/горизонтальная телепортация через блоки на расстоянии до 10 блоков.',
	'ConsoleSpammer — при включении этой функции в чат/консоль сервера отправляются установленные сообщения.',
	'Damage — нанесение урона самому себе.',
	'ForceUnicodeChat — использование принудительного чата в юникоде.',
	'Ghost — один из самых лучших читов на данную версию, с возможностью настроить всё до мелочей, например поменять цвет интерфейса и настроить KillAura вплоть до расстояния атаки размером с пиксель.',
	'GhostHand — возможность ломать блоки сквозь стены.',
	'GodMode — дополнительный плагин к Mod Loader, с помощью которого вы не будете умирать, с таким модом, можно делать все что угодно.',
	'ItemTeleport — использование эксплоита для того, чтобы далеко подбирать предметы.',
	'KeepContainer — функция, благодаря которой после закрытия окна (сундук, шалкер, магазин..) кнопкой можно показать окно снова, когда ты уже далеко.',
	'Kick — кик/лив персонажа с игры и/или сервера.',
	'MoreCarry — возможность переносить вещи в четырех слотах крафта, не выкидывая их при закрытии инвентаря.',
	'MultiActions — использование предметов и одновременная возможность разрушения блоков.',
	'NoPitchLimit — отключение ограничений на поворот головы, можно крутиться как угодно.',
	'Phase — возможность проходить сквозь блоки или возращаться при падение назад.',
	'Plugins — возможность узнать установленные на сервере плагины, даже если нет прав на команду.',
	'PortalMenu — использование чата и окна, будучи в портале.',
	'ServerCrasher — специальная функция, настроенная на краш сервера или игры.',
	'Teleport — данный чит предназначен для быстрого перемещения игрового объекта (игрока) по заранее сохранённым или известным координатам.',
	'AimBot — возможность попадать всегда в ту часть тела противника, в которую персонажу нужно. Иногда направление ударов зависит от самого софта.',
	'AutoArmor — автоматическое надевание и смена брони, позволение менять её даже на ходу, имеет настройку задержки смены после остановки.',
	'AutoBow — автоматическая стрельба из лука.',
	'AutoClicker — автоматическое нанесение ударов с установленным количеством CPS.',
	'AutoLeave — авто выход с сервера при низком хп.',
	'AutoPot — автоматически персонаж кидает зелья здоровья, когда остается меньше определенного ХП.',
	'AutoSoup — автоматическое пополнение здоровья используя супы (в мини-играх).',
	'AutoWeapon — автоматическое включение оружия у персонажа.',
	'BowAimBot — автоприцел/автонаводка для стрельбы лука.',
	'Criticals — настройка нанесения критического удара по цели.',
	'FastBow — чит на быструю стрельбу из лука - лучшее дополнение к BowAimbot.',
	'HitBox — изменение размеров хитбокса цели для увеличения вашей точности.',
	'Ignite — автоматически поджигает игроков вокруг вас, если в хотбаре имеется кремень и железо или зажигалка.',
	'KillAura — данная функция бьет врагов за персонажа.',
	'NoFriends — функция включает возможность использования читов против добвленных друзей в чит-клиенте.',
	'SuperKnockBack — откидывание от удара увеличвается на установленный радиус в чит-клиенте.',
	'TNTBlock — включение блока мечом, когда взрывается ТНТ.',
	'TeleportHit — использование эксплоита для того, чтобы бить за расстояние дальше шести блоков.',
	'Trigger — чит, позволяющий стрелять автоматически после того, как игрок навел прицел на голову противника.',
	'Velocity — включение лишь частичного/установленного откидывания, а не полного как с AntiKnockBack (антиотдача).',
	'Sprint — бесконечный бег. Не нужно два раза нажимать на W при падении скорости.'
]