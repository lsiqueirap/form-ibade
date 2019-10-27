'use strict';
appModule.controller('DashboardController', ['$scope', '$http', '$location', '$stateParams', '$rootScope', '$timeout', '$state', 'icdb', 'alertService',
    function ($scope, $http, $location, $stateParams, $rootScope, $timeout, $state, icdb, alertService) {
        $scope.db = {};
        $scope.db.form = {};

        $scope.db.form.model = {};
        $scope.db.form.isSubmit = false;
        $scope.db.form.isReqSent = false;


        
        // --------------------------------------------
        // Common Section
        // --------------------------------------------
        var getSupportedFileExtension = function() {
            return ['jpg', 'jpeg', 'png','pdf'];
        }  



        $scope.db.form.state = []; 
        $scope.db.form.state = [{
           text:'AC',
           value:'AC',
        },{
           text:'AL',
           value:'AL',
        },{
           text:'AP',
           value:'AP',
        },{
           text:'AM',
           value:'AM',
        },{
           text:'BA',
           value:'BA',
        },{
           text:'CE',
           value:'CE',
        },{
           text:'DF',
           value:'DF',
        },{
           text:'ES',
           value:'ES',
        },{
           text:'GO',
           value:'GO',
        },{
           text:'MA',
           value:'MA',
        },{
           text:'MT',
           value:'MT',
        },{
           text:'MS',
           value:'MS',
        },{
           text:'MG',
           value:'MG',
        },{
           text:'PA',
           value:'PA',
        },{
           text:'PB',
           value:'PB',
        },{
           text:'PR',
           value:'PR',
        },{
           text:'PE',
           value:'PE',
        },{
           text:'PI',
           value:'PI',
        },{
           text:'RJ',
           value:'RJ',
        },{
           text:'RN',
           value:'RN',
        },{
           text:'RS',
           value:'RS',
        },{
           text:'RO',
           value:'RO',
        },{
           text:'RR',
           value:'RR',
        },{
           text:'SC',
           value:'SC',
        },{
           text:'SP',
           value:'SP',
        },{
           text:'SE',
           value:'SE',
        },{
           text:'TO',
           value:'TO',
        }];


// $scope.db.form.model.alcoholFrequency = "fghfgh";
// $scope.db.form.model.alcoholCheckbox = true;
// $scope.db.form.model.alcoholName = "ghfgh";
// $scope.db.form.model.alcoholPlace = "erterte";
// $scope.db.form.model.armyFriend = "fsdfsd";
// $scope.db.form.model.armyfriendHole = "gdfgdfg";
// $scope.db.form.model.armyfriendKnow = "fdgfd";
// $scope.db.form.model.armyfriendName = "fdsfsdf";
// $scope.db.form.model.armyfriendRE = "65456";
// $scope.db.form.model.armyfriendRelation = "dgdfgdfg";
// $scope.db.form.model.armyfriendStatus = "dfgdfgdf";
// $scope.db.form.model.armyfriendUnity = "sdertwe";
// $scope.db.form.model.armyfriendcpfNo = "8646545454";
// $scope.db.form.model.armyfriendrgNumber = "465465";
// $scope.db.form.model.arrestedAddress = "jghjghj";
// $scope.db.form.model.arrestedCheckbox = true;
// $scope.db.form.model.arrestedName = "jhgjgh";
// $scope.db.form.model.arrestedNickname = "ghjghjgh";
// $scope.db.form.model.arrestedRelation = "jghjgh";
// $scope.db.form.model.arrestedheShe = "jghjghj";
// $scope.db.form.model.arrestedrelDate = "jghjgh";
// $scope.db.form.model.boygiprovide = "dffsdfsdfljkl";
// $scope.db.form.model.boygirlAddress = "hdfgfsdfshdf";
// $scope.db.form.model.boygirlCity = "g4df65gd";
// $scope.db.form.model.boygirlComplement = "ghsdfgsjdf";
// $scope.db.form.model.boygirlFriend = true;
// $scope.db.form.model.boygirlLocation = "hgkhgdfjg";
// $scope.db.form.model.boygirlName = "hjkdfghdfkgh";
// $scope.db.form.model.boygirlNeighborhood = "hgkdhfgkdj";
// $scope.db.form.model.boygirlNickname = "gdfgdgdf";
// $scope.db.form.model.boygirlNumber = "45654";
// $scope.db.form.model.boygirlProfession = "gsdgg";
// $scope.db.form.model.boygirlState = "AM";
// $scope.db.form.model.boygirlZipcode = "456456";
// $scope.db.form.model.boygirlbirthCity = "hgdfjkghdfjk";
// $scope.db.form.model.boygirlbirthState = "AL";
// $scope.db.form.model.boygirlcpfNo = "76767687667";
// $scope.db.form.model.boygirldating = "dfjkghde";
// $scope.db.form.model.boygirlrgNo = "465454";
// $scope.db.form.model.childAddress = "dfgdfgdf";
// $scope.db.form.model.childAge = "465564";
// $scope.db.form.model.childCheck = true;
// $scope.db.form.model.childCity = "44654";
// $scope.db.form.model.childComplement = "gdfgdgdf";
// $scope.db.form.model.childLocation = "dfgdfg";
// $scope.db.form.model.childName = "jkdfkgjdfgjl";
// $scope.db.form.model.childNeighborhood = "gddfgdgd";
// $scope.db.form.model.childNickname = "bgjkgdfghdf";
// $scope.db.form.model.childNumber = "4654";
// $scope.db.form.model.childProfession = "464654";
// $scope.db.form.model.childRegRgNumber = "65465465";
// $scope.db.form.model.childRelationship = "jdflgjdfklgj";
// $scope.db.form.model.childState = "2";
// $scope.db.form.model.childZipcode = "45656465";
// $scope.db.form.model.childbirthCity = "gfdgdfgdf";
// $scope.db.form.model.childbirthState = "3";
// $scope.db.form.model.childlivesWith = "gdfgdfg";
// $scope.db.form.model.childregcpfNumber = "4564554544";
// $scope.db.form.model.complementInfo = "fgdfgdf";
// $scope.db.form.model.detailinfoFaited = "rtyrty";
// $scope.db.form.model.detracatvhChk = true;
// $scope.db.form.model.detracatvhColor = "gdfg";
// $scope.db.form.model.detracatvhInfo = "dfgdf";
// $scope.db.form.model.detracatvhInsu = true;
// $scope.db.form.model.detracatvhModal = "gdfgdf";
// $scope.db.form.model.detracatvhNumber = "gdfgdf";
// $scope.db.form.model.detracatvhReason = "fgdfgdf";
// $scope.db.form.model.detracatvhTicket = true;
// $scope.db.form.model.detransCategory = "fsdfsdf";
// $scope.db.form.model.detransChk = true;
// $scope.db.form.model.detransHappen = "asdasdsd";
// $scope.db.form.model.detransdriChk = true;
// $scope.db.form.model.detransdriTitle = "dfgdfgf";
// $scope.db.form.model.detransexLocal = "wdasdasd";
// $scope.db.form.model.detranslicChk = true;
// $scope.db.form.model.detranslicNumber = "967787";
// $scope.db.form.model.detranslicTitle = "asdasdas";
// $scope.db.form.model.detranspunishChk = true;
// $scope.db.form.model.detransregNumber = "9788789";
// $scope.db.form.model.detransvehChk = true;
// $scope.db.form.model.detransvehColor = "gfdg";
// $scope.db.form.model.detransvehInfo = "gfdgdf";
// $scope.db.form.model.detransvehModel = "dfgdfgdf";
// $scope.db.form.model.detransvehNumber = "dfgdfg";
// $scope.db.form.model.detransvehReason = "dfgdf";
// $scope.db.form.model.detransvehdriveChk = true;
// $scope.db.form.model.detransvehinsurChk = true;
// $scope.db.form.model.detransvehtraTicket = true;
// $scope.db.form.model.detransvehwhoDrive = "gfdgfd";
// $scope.db.form.model.detransyouvhChk = true;
// $scope.db.form.model.detransyouvhColor = "dfgdfgdf";
// $scope.db.form.model.detransyouvhDrive = true;
// $scope.db.form.model.detransyouvhInfo = "gdfgdf";
// $scope.db.form.model.detransyouvhInsu = true;
// $scope.db.form.model.detransyouvhModel = "dfgdfg";
// $scope.db.form.model.detransyouvhNumber = "dfgdfg";
// $scope.db.form.model.detransyouvhReason = "gfdgdf";
// $scope.db.form.model.detransyouvhowName = "gdfgdf";
// $scope.db.form.model.detransyouvhrelHimHer = "gdfgdf";
// $scope.db.form.model.detransyouvhtraTicket = true;
// $scope.db.form.model.detransyouvhwhoDrive = "gdfgdf";
// $scope.db.form.model.detraowvhnonmChk = true;
// $scope.db.form.model.detraowvhnonmColor = "gdfgdfg";
// $scope.db.form.model.detraowvhnonmDrive = true;
// $scope.db.form.model.detraowvhnonmInfo = "gfdgdfg";
// $scope.db.form.model.detraowvhnonmInsu = true;
// $scope.db.form.model.detraowvhnonmModel = "dfgdfg";
// $scope.db.form.model.detraowvhnonmNumber = "gdfgdfg";
// $scope.db.form.model.detraowvhnonmOwner = "gdfgdf";
// $scope.db.form.model.detraowvhnonmReason = "fdgdfg";
// $scope.db.form.model.detraowvhnonmTicket = true;
// $scope.db.form.model.detraowvhnonmrelHimHer = "gfdgdf";
// $scope.db.form.model.detraowvhnonmwhoDrive = "dfgfd";
// $scope.db.form.model.diseaseCheckbox = true;
// $scope.db.form.model.drugfriendAddress = "ghjgh";
// $scope.db.form.model.drugfriendName = "yututy";
// $scope.db.form.model.drugfriendNickname = "jghjgh";
// $scope.db.form.model.drugfriendRelation = "hgjghj";
// $scope.db.form.model.drugfriendyRelation = "utyuty";
// $scope.db.form.model.drugsBuy = "ytutyu";
// $scope.db.form.model.drugsCheckbox = true;
// $scope.db.form.model.drugsEffects = "utyutyu";
// $scope.db.form.model.drugsHappened = "gtryrt";
// $scope.db.form.model.drugsName = "hfghfgh";
// $scope.db.form.model.drugsPaid = "utyuty";
// $scope.db.form.model.drugsPlace = "yrtyr";
// $scope.db.form.model.drugsUsing = "hfghfg";
// $scope.db.form.model.drugsVoce = "hfgh";
// $scope.db.form.model.drugsWith = "tyrty";
// $scope.db.form.model.escpunishAddress = "dfgdfg";
// $scope.db.form.model.escpunishCity = "fdgdfg";
// $scope.db.form.model.escpunishComplement = "gfdgdf";
// $scope.db.form.model.escpunishCourse = "gdfgdf";
// $scope.db.form.model.escpunishEAD = true;
// $scope.db.form.model.escpunishNeighborhood = "fdgdfg";
// $scope.db.form.model.escpunishNumber = "87978";
// $scope.db.form.model.escpunishPresencial = true;
// $scope.db.form.model.escpunishSchool = "gfdgdf";
// $scope.db.form.model.escpunishSemester = "gdfgfd";
// $scope.db.form.model.escpunishState = "MG";
// $scope.db.form.model.escpunishTitle = "gfgfdg";
// $scope.db.form.model.escpunishZipCode = "985587";
// $scope.db.form.model.escpunishonCourse = "fdgdfgdf";
// $scope.db.form.model.escpunishpolstation = "fdgdfg";
// $scope.db.form.model.escstudiAddress = "fsdfsd";
// $scope.db.form.model.escstudiCity = "sdfsdf";
// $scope.db.form.model.escstudiComplement = "wewerw";
// $scope.db.form.model.escstudiCourse = "fdsdf";
// $scope.db.form.model.escstudiEAD = true;
// $scope.db.form.model.escstudiNeighborhood = "fdgfdg";
// $scope.db.form.model.escstudiNumber = "98889";
// $scope.db.form.model.escstudiPresencial = true;
// $scope.db.form.model.escstudiSchool = "werwe";
// $scope.db.form.model.escstudiSemester = "fsdfsd";
// $scope.db.form.model.escstudiState = "MS";
// $scope.db.form.model.escstudiTitle = "ewwewe";
// $scope.db.form.model.escstudiZipCode = "323454";
// $scope.db.form.model.escstudionCourse = "sdffsdf";
// $scope.db.form.model.escstudipolstation = "fdgfdgdf";
// $scope.db.form.model.faintedCheckbox = true;
// $scope.db.form.model.famAddress = "hjghdfkg";
// $scope.db.form.model.famAge = "8989";
// $scope.db.form.model.famCity = "78787";
// $scope.db.form.model.famComplement = "hgfdkjghdfk";
// $scope.db.form.model.famName = "hjdjkgh";
// $scope.db.form.model.famNeighborhood = "hfjdkghdfkj";
// $scope.db.form.model.famNickname = "hjkdfhgdfjk";
// $scope.db.form.model.famNumber = "49345798";
// $scope.db.form.model.famProfession = "hggdfg";
// $scope.db.form.model.famState = "AP";
// $scope.db.form.model.famZipcode = "8898998";
// $scope.db.form.model.fambirthCity = "9889";
// $scope.db.form.model.fambirthState = "AP";
// $scope.db.form.model.famdegreeKinship = "jdgjdlkfjg";
// $scope.db.form.model.familydrugsInfo = "utyutyu";
// $scope.db.form.model.famregcpfNumber = "9889888888";
// $scope.db.form.model.famregrgNumber = "34534758937";
// $scope.db.form.model.famworkLocation = "gdfgdfg";
// $scope.db.form.model.finAge = "8798798";
// $scope.db.form.model.finCity = "hgkdfjgdfhg";
// $scope.db.form.model.finComplement = "gdfgdf";
// $scope.db.form.model.finName = "fsdfsdf";
// $scope.db.form.model.finNeighborhood = "gdfgd";
// $scope.db.form.model.finNumber = "540934985";
// $scope.db.form.model.finProfession = "534534";
// $scope.db.form.model.finRelationship = "fsdfs";
// $scope.db.form.model.finState = "BA";
// $scope.db.form.model.finWage = "43534534";
// $scope.db.form.model.finZipcode = "98798789";
// $scope.db.form.model.finbirthCity = "dfsdf";
// $scope.db.form.model.finbirthState = "CE";
// $scope.db.form.model.fincomAddress = "gdfgdg";
// $scope.db.form.model.fincpfNumber = "3423423424";
// $scope.db.form.model.finheshework = "gfdfgdfklj";
// $scope.db.form.model.finholeCompany = "87987";
// $scope.db.form.model.fininfo = "dfsdfs";
// $scope.db.form.model.finmarLocal = "5345345";
// $scope.db.form.model.finnickName = "34534";
// $scope.db.form.model.finrgNumber = "345345345";
// $scope.db.form.model.finspouse = "dfsdfsd";
// $scope.db.form.model.firstWitness = "fsdfsdf";
// $scope.db.form.model.firstwiAge = "45564";
// $scope.db.form.model.firstwiCity = "dfsdfsdf";
// $scope.db.form.model.firstwiComplement = "4566465";
// $scope.db.form.model.firstwiName = "sdfsf";
// $scope.db.form.model.firstwiNeighborhood = "sdfsdfsd";
// $scope.db.form.model.firstwiNickname = "gdgfsdg";
// $scope.db.form.model.firstwiNo = "6464654";
// $scope.db.form.model.firstwiProfession = "sdffsdf";
// $scope.db.form.model.firstwiRegNo = "456465";
// $scope.db.form.model.firstwiState = "RR";
// $scope.db.form.model.firstwiZipcode = "564";
// $scope.db.form.model.firstwibirthPlace = "sdfsfs";
// $scope.db.form.model.firstwibirthState = "PE";
// $scope.db.form.model.firstwicomAddress = "fgdgdfg";
// $scope.db.form.model.firstwicpfNo = "4566465555";
// $scope.db.form.model.firstwihimher = "445454654";
// $scope.db.form.model.firstwiresAddress = "dsffsfs";
// $scope.db.form.model.fourthwitness = "tyutuyt";
// $scope.db.form.model.friendsdrugCk = true;
// $scope.db.form.model.habitsTitle = "dgdgd";
// $scope.db.form.model.habitsWeekend = "gdfgdfgdf";
// $scope.db.form.model.habitsweek = "gdfgdf";
// $scope.db.form.model.hospitalizedCheckbox = true;
// $scope.db.form.model.hospitalizedTitle = "rtyrtyrt";
// $scope.db.form.model.iescChk = true;
// $scope.db.form.model.iescFigure = "65464";
// $scope.db.form.model.iescReason = "gdfg";
// $scope.db.form.model.iescbusChk = true;
// $scope.db.form.model.iescbusName = "fgfdg";
// $scope.db.form.model.iescbusShare = "ewewe";
// $scope.db.form.model.iescbusinfoCompany = "werwe";
// $scope.db.form.model.iescleaderName = "dfgdfgfd";
// $scope.db.form.model.iescreaSize = "erwe";
// $scope.db.form.model.iescreaTitle = "gfgdf";
// $scope.db.form.model.iescreaValue = "65465465";
// $scope.db.form.model.iescrealityChk = true;
// $scope.db.form.model.judiciaiadmProcess = true;
// $scope.db.form.model.judiciaigunAddress = "fdfsdfsd";
// $scope.db.form.model.judiciaigunCPFno = "9858788554";
// $scope.db.form.model.judiciaigunChk = true;
// $scope.db.form.model.judiciaigunCity = "wewer";
// $scope.db.form.model.judiciaigunComplement = "fsdfsdf";
// $scope.db.form.model.judiciaigunFrom = "gdfgdf";
// $scope.db.form.model.judiciaigunKind = "xvxcvxcv";
// $scope.db.form.model.judiciaigunModel = "sasdas";
// $scope.db.form.model.judiciaigunNeighborhood = "sdfsdfsd";
// $scope.db.form.model.judiciaigunNumber = "454564";
// $scope.db.form.model.judiciaigunRGno = "564564";
// $scope.db.form.model.judiciaigunState = "PB";
// $scope.db.form.model.judiciaigunStolen = "dfssdfsdf";
// $scope.db.form.model.judiciaigunTotal = "dasdasd";
// $scope.db.form.model.judiciaigunZipcode = "897897";
// $scope.db.form.model.judiciaigundocName = "dfgdfgdf";
// $scope.db.form.model.judiciaigundocNumber = "ewwerwe";
// $scope.db.form.model.judiciaigunexpDate = "ffdgfdg";
// $scope.db.form.model.judiciaipolCPFno = "4556465555";
// $scope.db.form.model.judiciaipolCity = "qweqweqw";
// $scope.db.form.model.judiciaipolCondition = "sdfsf";
// $scope.db.form.model.judiciaipolName = "fsdfsd";
// $scope.db.form.model.judiciaipolNeighborhood = "fsdfsdf";
// $scope.db.form.model.judiciaipolNumber = "654654654";
// $scope.db.form.model.judiciaipolOutcome = "vxcvxcv";
// $scope.db.form.model.judiciaipolRGno = "54645465";
// $scope.db.form.model.judiciaipolRel = "fsdfsd";
// $scope.db.form.model.judiciaipolSituation = true;
// $scope.db.form.model.judiciaipolState = "SE";
// $scope.db.form.model.judiciaipoldeOccure = "sdfsdf";
// $scope.db.form.model.judiciaipoltyAddress = "sdfsdf";
// $scope.db.form.model.judiciaipoltyProcess = "dsfsdfsdf";
// $scope.db.form.model.judiciaisCivil = true;
// $scope.db.form.model.judiciaisCondition = "sdfsd";
// $scope.db.form.model.judiciaisCriminal = true;
// $scope.db.form.model.judiciaisForum = "sdfsdf";
// $scope.db.form.model.judiciaisInformation = "sdfsdfsdf";
// $scope.db.form.model.judiciaisMilitary = true;
// $scope.db.form.model.judiciaisNeighborhood = "sdfdsf";
// $scope.db.form.model.judiciaisNoYear = "fsdf";
// $scope.db.form.model.judiciaisOccurrenceno = "6465";
// $scope.db.form.model.judiciaisOutcome = "dfsdf";
// $scope.db.form.model.judiciaisVara = "sdfsdf";
// $scope.db.form.model.judiciaisWork = true;
// $scope.db.form.model.judiciaisYouth = true;
// $scope.db.form.model.judiciaisadmDetailit = "fsdfsd";
// $scope.db.form.model.judiciaisadmNumprocess = "sdfsdf";
// $scope.db.form.model.judiciaisadmOutcome = "dfsdfsd";
// $scope.db.form.model.judiciaisadmyouRole = "sdfs";
// $scope.db.form.model.judiciaisinvDetailit = "fsdfsdfsd";
// $scope.db.form.model.judiciaisinvNumprocess = "dfsdfsd";
// $scope.db.form.model.judiciaisinvOutcome = "sdfsdfsd";
// $scope.db.form.model.judiciaisinvyouRole = "fsdfsdf";
// $scope.db.form.model.judiciaispolConduct = "sdfsdf";
// $scope.db.form.model.judiciaispoldetOccurence = "xcvxcv";
// $scope.db.form.model.judiciaispoliceCheck = true;
// $scope.db.form.model.judiciaispolpolOccurence = "fgfgdf";
// $scope.db.form.model.judiciaispolpolOutcome = "qweqweqw";
// $scope.db.form.model.judiciaisspeCriminal = true;
// $scope.db.form.model.judiciaistypeProcess = "dfsdf";
// $scope.db.form.model.parEmail = "fdfsdfs@gmail.com";
// $scope.db.form.model.parName = "dflksndklfsdkfn";
// $scope.db.form.model.parReligion = "djfgkdjfgdjfkg";
// $scope.db.form.model.parbirthCity = "dsfsdfsdf";
// $scope.db.form.model.parbirthState = "AM";
// $scope.db.form.model.parcpfregNo = "42323423443";
// $scope.db.form.model.parcurrentOccupation = "gfgdfgd";
// $scope.db.form.model.parissueBy = "kldjglkgdf";
// $scope.db.form.model.parlastregNo = "34534534534";
// $scope.db.form.model.parmaritalStatus = "jhdfkjghdfjh";
// $scope.db.form.model.parnickName = "kdfkgdfgkl;dk";
// $scope.db.form.model.parotherPeople = "jkdfhgdkjfg";
// $scope.db.form.model.parprofession = "fgdgdf";
// $scope.db.form.model.parregnoRgn = "3453534";
// $scope.db.form.model.paternalityProccess = true;
// $scope.db.form.model.polexamChk = true;
// $scope.db.form.model.polexamInfo = "gdfgdfg";
// $scope.db.form.model.politicalAddress = "454564";
// $scope.db.form.model.politicalCheckbox = true;
// $scope.db.form.model.politicalCity = "45646";
// $scope.db.form.model.politicalComplement = "45646";
// $scope.db.form.model.politicalFiliation = ";lkl;k;lkl;";
// $scope.db.form.model.politicalHowmany = "546";
// $scope.db.form.model.politicalInformation = "sdfsdf";
// $scope.db.form.model.politicalNeighborhood = "k;lk";
// $scope.db.form.model.politicalNumber = "45564";
// $scope.db.form.model.politicalState = ";lk;lk";
// $scope.db.form.model.politicalZipcode = "4564654";
// $scope.db.form.model.politicalpartyName = "dfgdf";
// $scope.db.form.model.politicalpunCheckbox = true;
// $scope.db.form.model.politicalrefPoint = "sdfsdf";
// $scope.db.form.model.profiarseAddress = "dfsdfsdf";
// $scope.db.form.model.profiarseCity = "7sdfsdf";
// $scope.db.form.model.profiarseCompany = "fdgdf";
// $scope.db.form.model.profiarseComplement = "fsdfsdf";
// $scope.db.form.model.profiarseLeft = "sdfsdf";
// $scope.db.form.model.profiarseNeighborhood = "wewe";
// $scope.db.form.model.profiarseNumber = "98798";
// $scope.db.form.model.profiarsePel = "gdfgdfg";
// $scope.db.form.model.profiarseRole = "fsdfsd";
// $scope.db.form.model.profiarseState = "4";
// $scope.db.form.model.profiarseTitle = "werwer";
// $scope.db.form.model.profiarseUnity = "werwe";
// $scope.db.form.model.profiarsepolStation = "fsdfsd";
// $scope.db.form.model.profiarsepunSuf = "fdsfsdf";
// $scope.db.form.model.profipoliChk = true;
// $scope.db.form.model.profipoliHowmany = "gfdg";
// $scope.db.form.model.profipoliReproved = "dfdfgdf";
// $scope.db.form.model.profipubjobChk = true;
// $scope.db.form.model.profipubjobInstitution = "gdfg";
// $scope.db.form.model.profipubjobOutcome = "rwe";
// $scope.db.form.model.profipubjobReproved = "werwe";
// $scope.db.form.model.profipubjobTimes = "fdg";
// $scope.db.form.model.profipubjoblocExam = "ewwe";
// $scope.db.form.model.profissionaisTitle = "fsdfsf";
// $scope.db.form.model.profiworkAddress = "dfsdf";
// $scope.db.form.model.profiworkCPNJ = "45646456";
// $scope.db.form.model.profiworkCity = "asdasd";
// $scope.db.form.model.profiworkCompany = "werwer";
// $scope.db.form.model.profiworkComplement = "ewewe";
// $scope.db.form.model.profiworkDepartment = "sdfsdf";
// $scope.db.form.model.profiworkNeighborhood = "werwe";
// $scope.db.form.model.profiworkNumber = "544654";
// $scope.db.form.model.profiworkRole = "fdfsd";
// $scope.db.form.model.profiworkState = "MA";
// $scope.db.form.model.profiworkWage = "76786";
// $scope.db.form.model.profiworkZipcode = "6687987";
// $scope.db.form.model.profiworkduriPreiod = "sdfsdf";
// $scope.db.form.model.profiworklpoliStation = "sdfsdf";
// $scope.db.form.model.profiworkpunSuff = "fsdfsd";
// $scope.db.form.model.profiworkregReason = "fsdfsd";
// $scope.db.form.model.profiworksupName = "fsdfsd";
// $scope.db.form.model.proinformation = "dgfgdfg";
// $scope.db.form.model.punishmentCheckbox = true;
// $scope.db.form.model.punishmentTitle = "5645456";
// $scope.db.form.model.resAddress = "djfdsjfj";
// $scope.db.form.model.resCity = "873549534";
// $scope.db.form.model.resComplement = "jlkjfgkdfj";
// $scope.db.form.model.resNeighborhood = "jlkjfdgkjdfg";
// $scope.db.form.model.resNumber = "45353454";
// $scope.db.form.model.resState = "MT";
// $scope.db.form.model.resTitle = "kjhkjhdfgdfhg";
// $scope.db.form.model.resZipcode = "9348534";
// $scope.db.form.model.reslivePartner = "dklsgjdlk";
// $scope.db.form.model.resliveWith = "gfdgdg";
// $scope.db.form.model.reslocpolStation = "shdkfjhsjkdf";
// $scope.db.form.model.resrelNeighbor = "87498534853";
// $scope.db.form.model.secondwitness = "ggyut";
// $scope.db.form.model.sindicateAddress = "dsadasdasd";
// $scope.db.form.model.sindicateCity = "gjhgjh";
// $scope.db.form.model.sindicateComplement = "jlkjlk";
// $scope.db.form.model.sindicateEntityname = "lkjlkjk";
// $scope.db.form.model.sindicateHowmany = "564";
// $scope.db.form.model.sindicateInfo = "jlkj";
// $scope.db.form.model.sindicateNeighborhood = "jkljjklj";
// $scope.db.form.model.sindicateNumber = "54564";
// $scope.db.form.model.sindicateState = "lkjkl";
// $scope.db.form.model.sindicateZipcode = "45465466";
// $scope.db.form.model.sindicaterefPoint = "fghfgh";
// $scope.db.form.model.sindicatesufferedCheckbox = true;
// $scope.db.form.model.smokeCheckbox = true;
// $scope.db.form.model.smokePositive = "tertergh";
// $scope.db.form.model.sportclubAddress = "dfgdgdf";
// $scope.db.form.model.sportclubCheckbox = true;
// $scope.db.form.model.sportclubCity = "4jlkjlkj";
// $scope.db.form.model.sportclubComplement = "hjkhkkj";
// $scope.db.form.model.sportclubHole = "hkjhkjhjkh";
// $scope.db.form.model.sportclubName = "kjhkjhk";
// $scope.db.form.model.sportclubNeighrhood = "jkhjkhjk";
// $scope.db.form.model.sportclubNumber = "65465465";
// $scope.db.form.model.sportclubState = "hkjhkj";
// $scope.db.form.model.sportclubZipcode = "456456";
// $scope.db.form.model.sportclubhowMany = "5";
// $scope.db.form.model.sportclubrefPoint = "kjkljlk";
// $scope.db.form.model.tattoosBody = "dgfgdf";
// $scope.db.form.model.tattoosCheckbox = true;
// $scope.db.form.model.tattoosDrawns = "gdfgdf";
// $scope.db.form.model.tattoosMeaning = "gdfgdf";
// $scope.db.form.model.tattoosReason = "erter";
// $scope.db.form.model.tattoosmadeIt = "thfghf";
// $scope.db.form.model.thirdWitness = "reterter";
// $scope.db.form.model.usedfreeTime = "gdfgdfg";
// $scope.db.form.model.whAddress = "dgjfgjdlkg";
// $scope.db.form.model.whCity = "ghfdgjkfgh";
// $scope.db.form.model.whComplement = "djfgdjgdkf";
// $scope.db.form.model.whLocation = "gjdkdfjgkldfg";
// $scope.db.form.model.whName = "ndfgdfgdjfklj";
// $scope.db.form.model.whNeighborhood = "jglfdkjgdfkgj";
// $scope.db.form.model.whNickname = "hgdkfjghdkfjg";
// $scope.db.form.model.whNumber = "53734573498";
// $scope.db.form.model.whProfession = "hdgfjkhgdf";
// $scope.db.form.model.whState = "MS";
// $scope.db.form.model.whTitle = "gdfgdfg";
// $scope.db.form.model.whZipcode = "834583498";
// $scope.db.form.model.whbirthCity = "kjglkjdlg";
// $scope.db.form.model.whbirthState = "GO";
// $scope.db.form.model.whregcpfNo = "0934953490";
// $scope.db.form.model.whrelPersion = "jdfklhjdfhkdjf";
// $scope.db.form.model.whrgNo = "44564654";
// $scope.db.form.model.witnessInformation = "sdffsdfsd";

// $scope.db.form.model.segundaAge = '1256';
// $scope.db.form.model.segundaCity = 'Rajkot';
// $scope.db.form.model.segundaComplement = 'sdfsdf';
// $scope.db.form.model.segundaName = 'sdfsdf';
// $scope.db.form.model.segundaNeighborhood = 'aczxczx';
// $scope.db.form.model.segundaNickname = 'qwqweqw';
// $scope.db.form.model.segundaNo = '1233';
// $scope.db.form.model.segundaProfession = 'fsdfsd';
// $scope.db.form.model.segundaRegNo = '985845';
// $scope.db.form.model.segundaState = 'CE';
// $scope.db.form.model.segundaZipcode = '365895';
// $scope.db.form.model.segundabirthPlace = 'qwqwqw';
// $scope.db.form.model.segundabirthState = 'AP';
// $scope.db.form.model.segundacomAddress = 'asdasdas';
// $scope.db.form.model.segundacpfNo = '64645895668';
// $scope.db.form.model.segundahimher = 'qweqweqw';
// $scope.db.form.model.segundaresAddress = 'dfsdfsdf';
// $scope.db.form.model.terceiraAge = '58';
// $scope.db.form.model.terceiraCity = 'qweqwe';
// $scope.db.form.model.terceiraComplement = 'xvvxcv';
// $scope.db.form.model.terceiraName = 'xcvxcvxc';
// $scope.db.form.model.terceiraNeighborhood = 'qwewqe';
// $scope.db.form.model.terceiraNickname = 'xcvxcv';
// $scope.db.form.model.terceiraNo = '56446456';
// $scope.db.form.model.terceiraProfession = 'wewqeqwewq';
// $scope.db.form.model.terceiraRegNo = '465465';
// $scope.db.form.model.terceiraState = 'PR';
// $scope.db.form.model.terceiraZipcode = '464689';
// $scope.db.form.model.terceirabirthPlace = 'qweqwe';
// $scope.db.form.model.terceirabirthState = 'MT';
// $scope.db.form.model.terceiracomAddress = 'ytutyu';
// $scope.db.form.model.terceiracpfNo = '8979565895';
// $scope.db.form.model.terceirahimher = 'yrtyrt';
// $scope.db.form.model.terceiraresAddress = 'bcvbc';
// $scope.db.form.model.quartaAge = '5646558';
// $scope.db.form.model.quartaCity = 'gfghdfh';
// $scope.db.form.model.quartaComplement = 'werwer';
// $scope.db.form.model.quartaName = 'nvbvn';
// $scope.db.form.model.quartaNeighborhood = 'bcvbcvb';
// $scope.db.form.model.quartaNickname = 'bcvbcvb';
// $scope.db.form.model.quartaNo = '544565';
// $scope.db.form.model.quartaProfession = 'bcvbcv';
// $scope.db.form.model.quartaRegNo = '8644654';
// $scope.db.form.model.quartaState = 'PE';
// $scope.db.form.model.quartaZipcode = '8977987';
// $scope.db.form.model.quartabirthPlace = 'werwerw';
// $scope.db.form.model.quartabirthState = 'RR';
// $scope.db.form.model.quartacomAddress = 'xvxcv';
// $scope.db.form.model.quartacpfNo = '8977988888';
// $scope.db.form.model.quartahimher = 'cxbcvbcv';
// $scope.db.form.model.quartaresAddress = 'ffsdfsd';

        $scope.db.form.model.alcoholCheckbox= "sim";
        $scope.db.form.model.arrestedCheckbox= "sim";
        $scope.db.form.model.boygirlFriend= "não";
        $scope.db.form.model.childCheck= "não";
        $scope.db.form.model.detracatvhChk= "sim";
        $scope.db.form.model.detracatvhInsu= "sim";
        $scope.db.form.model.detracatvhTicket= "sim";
        $scope.db.form.model.detransChk= "sim";
        $scope.db.form.model.detransdriChk= "sim";
        $scope.db.form.model.detranslicChk= "sim";
        $scope.db.form.model.detranspunishChk= "sim";
        $scope.db.form.model.detransvehChk= "sim";
        $scope.db.form.model.detranscnhppdChk= "sim";
        $scope.db.form.model.detransvehdriveChk= "sim";
        $scope.db.form.model.detransvehinsurChk= "sim";
        $scope.db.form.model.detransvehtraTicket= "sim";
        $scope.db.form.model.detransyouvhChk= "sim";
        $scope.db.form.model.detransyouvhDrive= "sim";
        $scope.db.form.model.detransyouvhInsu= "não";
        $scope.db.form.model.detransyouvhtraTicket= "sim";
        $scope.db.form.model.detraowvhnonmChk= "sim";
        $scope.db.form.model.detraowvhnonmDrive= "sim";
        $scope.db.form.model.detraowvhnonmInsu= "sim";
        $scope.db.form.model.detraowvhnonmTicket= "sim";
        $scope.db.form.model.diseaseCheckbox= "não";
        $scope.db.form.model.drugsCheckbox= "não";
        $scope.db.form.model.faintedCheckbox= "não";
        $scope.db.form.model.familydrugsCheckbox= "sim";
        $scope.db.form.model.friendsdrugCk= "sim";
        $scope.db.form.model.hospitalizedCheckbox= "não";
        $scope.db.form.model.iescChk= "sim";
        $scope.db.form.model.iescbusChk= "sim";
        $scope.db.form.model.iescrealityChk= "sim";
        $scope.db.form.model.judiciaiadmProcess= "sim";
        $scope.db.form.model.judiciaigunChk= "sim";
        $scope.db.form.model.judiciaipolSituation= "sim";
        $scope.db.form.model.judiciaisCivil= "sim";
        $scope.db.form.model.judiciaisCriminal= "não";
        $scope.db.form.model.judiciaisMilitary= "sim";
        $scope.db.form.model.judiciaistitleCheck= "sim";
        $scope.db.form.model.judiciaisWork= "não";
        $scope.db.form.model.judiciaisYouth= "sim";
        $scope.db.form.model.judiciaispoliceCheck= "sim";
        $scope.db.form.model.judiciaiInvesti= "sim";
        $scope.db.form.model.judiciaisspeCriminal= "sim";
        $scope.db.form.model.paternalityProccess= "sim";
        $scope.db.form.model.polexamChk= "sim";
        $scope.db.form.model.politicalCheckbox= "não";
        $scope.db.form.model.politicalpunCheckbox= "não";
        $scope.db.form.model.profipoliChk= "sim";
        $scope.db.form.model.profipubjobChk= "sim";
        $scope.db.form.model.punishmentCheckbox= "sim";
        $scope.db.form.model.childfinaSupport= "Não";
        $scope.db.form.model.sindicateCheckbox= "não";
        $scope.db.form.model.sindicatesufferedCheckbox= "sim";
        $scope.db.form.model.smokeCheckbox= "sim";
        $scope.db.form.model.sportclubCheckbox= "sim";
        $scope.db.form.model.tattoosCheckbox= "sim";
        $scope.db.form.model.escstudiPresencial= "Presencial";
        $scope.db.form.model.escpunishPresencial= "Presencial";
        $scope.db.form.model.profiworkSede= "Sede";
        $scope.db.form.model.profiarseZipcode= "123456";
      

        
        $scope.db.form.model.parbirthDate = new Date();
        $scope.db.form.model.famBirthday = new Date();
        $scope.db.form.model.whBirthday = new Date();
        $scope.db.form.model.whRelation = new Date();
        $scope.db.form.model.whTill = new Date();
        // $scope.db.form.model.boygirlBirthday = new Date();
        $scope.db.form.model.finmarriageDate = new Date();
        $scope.db.form.model.sportclubSince = new Date();
        $scope.db.form.model.sportclubTill = new Date();
        $scope.db.form.model.sindicateFiliation = new Date();
        $scope.db.form.model.sindicateTill = new Date();
        $scope.db.form.model.politicalSince = new Date();
        $scope.db.form.model.politicalTill = new Date();
        $scope.db.form.model.judiciaisDate = new Date();
        $scope.db.form.model.judiciaisDateoffact = new Date();
        $scope.db.form.model.judiciaisinvDate = new Date();
        $scope.db.form.model.judiciaisadmDate = new Date();
        $scope.db.form.model.judiciaipolDateocc = new Date();
        $scope.db.form.model.profiworkTill = new Date();
        $scope.db.form.model.profiworkSince = new Date();
        $scope.db.form.model.profiworktimeTill = new Date();
        $scope.db.form.model.profiworktimeSince = new Date();
        $scope.db.form.model.profiarseSince = new Date();
        $scope.db.form.model.profiarseTill = new Date();
        $scope.db.form.model.escstudicouSince = new Date();
        $scope.db.form.model.escstudicouTill = new Date();
        $scope.db.form.model.escpunishSince = new Date();
        $scope.db.form.model.escpunishTill = new Date();
        $scope.db.form.model.iescbTaken = new Date();
        $scope.db.form.model.iescExpire = new Date();
        $scope.db.form.model.detransexDate = new Date();

        
        
        // ---------------------------------------------------------------


        var defaultRec = {
            'resSince': new Date(), 
            'resAddress': '',
            'resComplement': '',
            'resNeighborhood': '',
            'resState': '',
            'resliveWith': '',
            'resTill': new Date(),
            'resNumber': '',
            'resZipcode': '',
            'resCity': '',
            'reslocpolStation': '',
            'resrelNeighbor': ''
        };

        $scope.ResidencyDetails = [];

        defaultRec.id = new Date().getTime();
        $scope.ResidencyDetails.push(defaultRec);
        $scope.db.form.newResidency = function() {
            defaultRec.id = new Date().getTime();
            $scope.ResidencyDetails.push(angular.copy(defaultRec));
        }

        $scope.db.form.removeNewResidency = function(index) {
            $scope.ResidencyDetails.splice(index, 1);
        }



        // ---------------------------------------------------------------



        var defaultFamily = {
            famAddress: '',
            famAge: 0,
            famBirthday: new Date(),
            famCity: '',
            famComplement: '',
            famName: '',
            famNeighborhood: '',
            famNickname: '',
            famNumber: 0,
            famProfession: '',
            famState: '',
            famZipcode: 0,
            fambirthCity: '',
            fambirthState: '',
            famdegreeKinship: '',
            famregcpfNumber: null,
            famregrgNumber: 0,
            famworkLocation: '',
            famStatusvivo: '',
        };

        $scope.InfoFamiliares = [];
        defaultFamily.id = new Date().getTime();
        $scope.InfoFamiliares.push(defaultFamily);
        $scope.db.form.InfoFamiliares = function() {
            defaultFamily.id = new Date().getTime();
            $scope.InfoFamiliares.push(angular.copy(defaultFamily));
        }

        $scope.db.form.removeNewFamily = function(index) {
            $scope.InfoFamiliares.splice(index, 1);
        }



        // ---------------------------------------------------------------


        var defaulttemfilhosdata = {
            childAddress: '',
            childAge: null,
            childCity: '',
            childComplement: '',
            childLocation: '',
            childName: '',
            childNeighborhood: '',
            childNickname: '',
            childNumber: null,
            childProfession: '',
            childRegRgNumber: null,
            childRelationship: '',
            childState: '',
            childZipcode: null,
            childbirthCity: '',
            childbirthState: '',
            childlivesWith: '',
            childregcpfNumber: null,
        };

        $scope.temfilhosdata = [];
        defaulttemfilhosdata.id = new Date().getTime();
        $scope.temfilhosdata.push(defaulttemfilhosdata);
        $scope.db.form.temfilhosdata = function() {
            defaulttemfilhosdata.id = new Date().getTime();
            $scope.temfilhosdata.push(angular.copy(defaulttemfilhosdata));
        }

        $scope.db.form.removetemfilhosdata = function(index) {
            $scope.temfilhosdata.splice(index, 1);
        }



        // ---------------------------------------------------------------

        var sindicateDData = {
            sindicateAddress: '',
            sindicateCity: '',
            sindicateComplement: '',
            sindicateEntityname: '',
            sindicateFiliation: new Date(),
            sindicateHowmany: null,
            sindicateInfo: '',
            sindicateNeighborhood: '',
            sindicateNumber: null,
            sindicateState: '',
            sindicateTill: new Date(),
            sindicateZipcode: null,
            sindicaterefPoint: '',
            sindicatesufferedCheckbox: '',
        };

        $scope.sindicateData = [];
        sindicateDData.id = new Date().getTime();
        $scope.sindicateData.push(sindicateDData);
        $scope.db.form.sindicateData = function() {
            sindicateDData.id = new Date().getTime();
            $scope.sindicateData.push(angular.copy(sindicateDData));
        }

        $scope.db.form.removesindicateData = function(index) {
            $scope.sindicateData.splice(index, 1);
        }

     



        $scope.db.form.Submit = function(form) {
          
            console.log("co",$scope.db.form.model);
            if (!form.$valid) {
                $scope.db.form.isSubmit = true;
                return;
            }

            $scope.db.form.isSubmit = false;
            $scope.db.form.isReqSent = true;

            $scope.db.form.model.residancyData = $scope.ResidencyDetails;
            $scope.db.form.model.familiaresData = $scope.InfoFamiliares;
            $scope.db.form.model.temfilhosData = $scope.temfilhosdata;
            $scope.db.form.model.sindicateData = $scope.sindicateData;

           

            $http.post('api/v1/submit/form', $scope.db.form.model).success(function (response) {
                console.log("responseee",response)
                if(!response.status) {
                    alertService.flash('error', 'Server not responsding!!');
                    return;
                }
             
                $scope.db.form.isReqSent = false;
                $scope.db.form.model = {};
                alertService.flash('success', 'Your Registration Successfully');
                $scope.db.form.initdz();
            });
        };

       

        // ------------------------------------
        // Image attachments
        // ------------------------------------
        $scope.db.form.removeImage = function() {
            $scope.db.form.model.image = '';
        };      

        $scope.db.form.initdz = function() {
            $timeout(function() {
                angular.element("#pt-dropzone").html('<div class="dropzone" id="image-dropzone"></div>');
                angular.element("#image-dropzone").dropzone({
                    url: '/api/common/file/upload',
                    acceptedFiles: 'image/*',
                    maxFilesize: 2, // MB
                    maxFiles: 20,
                    addRemoveLinks: true,
                    dictRemoveFile: 'Remove',
                    uploadMultiple: false,
                    dictDefaultMessage: "Solte o arquivo aqui",
                    init: function() {
                        this.on("complete", function(file) {
                            if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {}
                        });
                    },
                    accept: function(file, done) {
                        var fileType = file.type;
                        $timeout(function() {
                            if (file.name) {
                                var fileT = file.name.split('.');
                                var IcExtension = fileT[fileT.length - 1];
                                var validFiles = getSupportedFileExtension();
                                if (validFiles.indexOf(IcExtension.toLowerCase()) != -1) {
                                    done();
                                } else {
                                    return false;
                                }
                            }
                        }, 10);
                    },
                    success: function(data, resData) {
                        $timeout(function() {
                            $scope.db.form.model.image = resData.image;
                        }, 100);
                    },
                    removedfile: function(file, data) {
                        var _ref;
                        if (file && file.previewElement && file.previewElement.parentNode) {
                            return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                        }
                    }
                });
            }, 100);
        };


        $scope.db.form.initdz();

    }
]);