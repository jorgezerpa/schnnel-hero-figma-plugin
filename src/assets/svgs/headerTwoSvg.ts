const svg = `
    <svg width="200" height="143" viewBox="0 0 200 143" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_103_26)">
    <rect width="200" height="142.222" fill="white"/>
    <rect y="71.1111" width="200" height="71.1111" fill="#CCCCCC"/>
    <path d="M90.3913 31.4667V30.7071H95.6943V31.4667H93.4709V37.7778H92.6147V31.4667H90.3913ZM96.9053 37.7778V32.4748H97.7201V37.7778H96.9053ZM97.3196 31.591C97.1608 31.591 97.0238 31.5369 96.9087 31.4287C96.7959 31.3205 96.7395 31.1905 96.7395 31.0386C96.7395 30.8867 96.7959 30.7566 96.9087 30.6484C97.0238 30.5403 97.1608 30.4862 97.3196 30.4862C97.4784 30.4862 97.6142 30.5403 97.727 30.6484C97.842 30.7566 97.8996 30.8867 97.8996 31.0386C97.8996 31.1905 97.842 31.3205 97.727 31.4287C97.6142 31.5369 97.4784 31.591 97.3196 31.591ZM101.519 32.4748V33.1653H98.7705V32.4748H101.519ZM99.5715 31.2043H100.386V36.2587C100.386 36.4889 100.42 36.6615 100.486 36.7766C100.555 36.8894 100.643 36.9653 100.749 37.0045C100.857 37.0413 100.971 37.0597 101.091 37.0597C101.18 37.0597 101.254 37.0551 101.312 37.0459C101.369 37.0344 101.415 37.0252 101.45 37.0183L101.615 37.7502C101.56 37.7709 101.483 37.7916 101.384 37.8124C101.285 37.8354 101.16 37.8469 101.008 37.8469C100.778 37.8469 100.552 37.7974 100.331 37.6984C100.112 37.5995 99.9305 37.4487 99.7855 37.2461C99.6428 37.0436 99.5715 36.7881 99.5715 36.4797V31.2043ZM103.673 30.7071V37.7778H102.858V30.7071H103.673ZM107.389 37.8883C106.878 37.8883 106.437 37.7755 106.066 37.55C105.698 37.3221 105.414 37.0045 105.214 36.5971C105.016 36.1874 104.917 35.7109 104.917 35.1677C104.917 34.6246 105.016 34.1458 105.214 33.7315C105.414 33.3149 105.692 32.9904 106.049 32.7579C106.408 32.5231 106.827 32.4058 107.306 32.4058C107.582 32.4058 107.855 32.4518 108.124 32.5439C108.393 32.6359 108.639 32.7855 108.86 32.9927C109.08 33.1975 109.257 33.4691 109.388 33.8075C109.519 34.1458 109.585 34.5624 109.585 35.0573V35.4025H105.497V34.6982H108.756C108.756 34.399 108.696 34.132 108.576 33.8972C108.459 33.6625 108.291 33.4772 108.072 33.3414C107.856 33.2056 107.601 33.1377 107.306 33.1377C106.981 33.1377 106.701 33.2182 106.463 33.3794C106.229 33.5382 106.048 33.7453 105.921 34.0008C105.795 34.2563 105.732 34.5302 105.732 34.8225V35.292C105.732 35.6925 105.801 36.032 105.939 36.3105C106.079 36.5867 106.274 36.7973 106.522 36.9423C106.771 37.085 107.06 37.1564 107.389 37.1564C107.603 37.1564 107.796 37.1265 107.969 37.0666C108.144 37.0045 108.294 36.9124 108.421 36.7904C108.548 36.6661 108.645 36.5119 108.715 36.3278L109.502 36.5487C109.419 36.8157 109.28 37.0505 109.084 37.2531C108.888 37.4533 108.647 37.6098 108.359 37.7226C108.071 37.8331 107.748 37.8883 107.389 37.8883Z" fill="black"/>
    <path d="M71.1156 42.914V45.9443H70.7664V42.914H71.1156ZM72.6784 45.9917C72.4733 45.9917 72.2932 45.9429 72.1384 45.8452C71.9845 45.7475 71.8641 45.6109 71.7773 45.4353C71.6915 45.2598 71.6486 45.0546 71.6486 44.8198C71.6486 44.5831 71.6915 44.3764 71.7773 44.1998C71.8641 44.0233 71.9845 43.8862 72.1384 43.7885C72.2932 43.6908 72.4733 43.642 72.6784 43.642C72.8836 43.642 73.0632 43.6908 73.217 43.7885C73.3719 43.8862 73.4922 44.0233 73.5781 44.1998C73.6649 44.3764 73.7083 44.5831 73.7083 44.8198C73.7083 45.0546 73.6649 45.2598 73.5781 45.4353C73.4922 45.6109 73.3719 45.7475 73.217 45.8452C73.0632 45.9429 72.8836 45.9917 72.6784 45.9917ZM72.6784 45.678C72.8343 45.678 72.9625 45.6381 73.0632 45.5581C73.1638 45.4782 73.2382 45.3732 73.2866 45.243C73.3349 45.1128 73.3591 44.9717 73.3591 44.8198C73.3591 44.6679 73.3349 44.5263 73.2866 44.3952C73.2382 44.264 73.1638 44.1579 73.0632 44.077C72.9625 43.9961 72.8343 43.9557 72.6784 43.9557C72.5226 43.9557 72.3944 43.9961 72.2937 44.077C72.1931 44.1579 72.1186 44.264 72.0703 44.3952C72.022 44.5263 71.9978 44.6679 71.9978 44.8198C71.9978 44.9717 72.022 45.1128 72.0703 45.243C72.1186 45.3732 72.1931 45.4782 72.2937 45.5581C72.3944 45.6381 72.5226 45.678 72.6784 45.678ZM74.2413 45.9443V43.6716H74.5787V44.0149H74.6023C74.6438 43.9024 74.7187 43.8112 74.8273 43.7412C74.9358 43.6711 75.0581 43.6361 75.1942 43.6361C75.2199 43.6361 75.2519 43.6366 75.2904 43.6376C75.3289 43.6386 75.358 43.64 75.3777 43.642V43.9971C75.3658 43.9942 75.3387 43.9897 75.2963 43.9838C75.2549 43.9769 75.211 43.9735 75.1646 43.9735C75.0541 43.9735 74.9555 43.9966 74.8687 44.043C74.7829 44.0884 74.7148 44.1515 74.6645 44.2324C74.6152 44.3123 74.5905 44.4035 74.5905 44.5061V45.9443H74.2413ZM76.6753 45.9917C76.4563 45.9917 76.2674 45.9433 76.1086 45.8467C75.9508 45.749 75.829 45.6129 75.7431 45.4383C75.6583 45.2627 75.6159 45.0585 75.6159 44.8257C75.6159 44.5929 75.6583 44.3878 75.7431 44.2102C75.829 44.0317 75.9483 43.8926 76.1012 43.7929C76.2551 43.6923 76.4346 43.642 76.6398 43.642C76.7582 43.642 76.8751 43.6617 76.9905 43.7012C77.1059 43.7407 77.211 43.8048 77.3056 43.8936C77.4003 43.9813 77.4758 44.0977 77.532 44.2427C77.5883 44.3878 77.6164 44.5663 77.6164 44.7784V44.9263H75.8645V44.6245H77.2613C77.2613 44.4963 77.2356 44.3818 77.1843 44.2812C77.134 44.1806 77.062 44.1012 76.9683 44.043C76.8756 43.9848 76.7661 43.9557 76.6398 43.9557C76.5007 43.9557 76.3804 43.9902 76.2788 44.0593C76.1782 44.1273 76.1007 44.2161 76.0465 44.3256C75.9922 44.4351 75.9651 44.5525 75.9651 44.6778V44.879C75.9651 45.0506 75.9947 45.1961 76.0539 45.3155C76.114 45.4339 76.1974 45.5241 76.3039 45.5863C76.4105 45.6474 76.5343 45.678 76.6753 45.678C76.7671 45.678 76.8499 45.6652 76.9239 45.6395C76.9989 45.6129 77.0635 45.5734 77.1177 45.5212C77.172 45.4679 77.2139 45.4018 77.2435 45.3229L77.5809 45.4176C77.5454 45.532 77.4857 45.6326 77.4018 45.7194C77.318 45.8052 77.2144 45.8723 77.0911 45.9207C76.9678 45.968 76.8292 45.9917 76.6753 45.9917ZM78.1476 45.9443V43.6716H78.4849V44.0267H78.5145C78.5619 43.9054 78.6383 43.8112 78.7439 43.7441C78.8494 43.676 78.9762 43.642 79.1241 43.642C79.2741 43.642 79.3988 43.676 79.4985 43.7441C79.5991 43.8112 79.6775 43.9054 79.7337 44.0267H79.7574C79.8156 43.9093 79.9029 43.8161 80.0193 43.7471C80.1357 43.677 80.2753 43.642 80.4381 43.642C80.6413 43.642 80.8075 43.7056 80.9367 43.8329C81.0659 43.9592 81.1305 44.1559 81.1305 44.4233V45.9443H80.7813V44.4233C80.7813 44.2556 80.7355 44.1357 80.6437 44.0637C80.552 43.9917 80.444 43.9557 80.3197 43.9557C80.1599 43.9557 80.0361 44.004 79.9483 44.1007C79.8605 44.1964 79.8166 44.3177 79.8166 44.4647V45.9443H79.4615V44.3878C79.4615 44.2585 79.4196 44.1545 79.3357 44.0756C79.2519 43.9956 79.1439 43.9557 79.0117 43.9557C78.9209 43.9557 78.8361 43.9799 78.7572 44.0282C78.6793 44.0765 78.6161 44.1436 78.5678 44.2294C78.5204 44.3143 78.4968 44.4124 78.4968 44.5239V45.9443H78.1476ZM82.9409 45.9443V43.6716H83.2901V45.9443H82.9409ZM83.1184 43.2928C83.0503 43.2928 82.9917 43.2696 82.9423 43.2233C82.894 43.1769 82.8698 43.1212 82.8698 43.0561C82.8698 42.991 82.894 42.9352 82.9423 42.8889C82.9917 42.8425 83.0503 42.8193 83.1184 42.8193C83.1865 42.8193 83.2447 42.8425 83.293 42.8889C83.3423 42.9352 83.367 42.991 83.367 43.0561C83.367 43.1212 83.3423 43.1769 83.293 43.2233C83.2447 43.2696 83.1865 43.2928 83.1184 43.2928ZM84.2788 44.5771V45.9443H83.9296V43.6716H84.267V44.0267H84.2966C84.3498 43.9113 84.4307 43.8186 84.5392 43.7486C84.6477 43.6775 84.7878 43.642 84.9595 43.642C85.1133 43.642 85.248 43.6736 85.3634 43.7367C85.4788 43.7989 85.5686 43.8936 85.6327 44.0208C85.6968 44.1471 85.7289 44.3069 85.7289 44.5002V45.9443H85.3797V44.5239C85.3797 44.3453 85.3333 44.2063 85.2406 44.1066C85.1479 44.006 85.0206 43.9557 84.8588 43.9557C84.7474 43.9557 84.6477 43.9799 84.56 44.0282C84.4731 44.0765 84.4046 44.1471 84.3543 44.2398C84.304 44.3325 84.2788 44.445 84.2788 44.5771ZM86.367 46.7966V43.6716H86.7043V44.0326H86.7458C86.7714 43.9932 86.8069 43.9429 86.8523 43.8817C86.8986 43.8196 86.9647 43.7643 87.0506 43.716C87.1374 43.6667 87.2547 43.642 87.4027 43.642C87.5941 43.642 87.7628 43.6899 87.9088 43.7855C88.0547 43.8812 88.1687 44.0169 88.2505 44.1924C88.3324 44.368 88.3734 44.5752 88.3734 44.8139C88.3734 45.0546 88.3324 45.2632 88.2505 45.4398C88.1687 45.6154 88.0552 45.7515 87.9102 45.8482C87.7652 45.9438 87.598 45.9917 87.4086 45.9917C87.2626 45.9917 87.1457 45.9675 87.058 45.9192C86.9702 45.8699 86.9026 45.8141 86.8552 45.752C86.8079 45.6889 86.7714 45.6366 86.7458 45.5951H86.7162V46.7966H86.367ZM86.7102 44.808C86.7102 44.9796 86.7354 45.131 86.7857 45.2622C86.836 45.3924 86.9095 45.4945 87.0062 45.5685C87.1028 45.6415 87.2212 45.678 87.3613 45.678C87.5073 45.678 87.6291 45.6395 87.7268 45.5626C87.8254 45.4847 87.8994 45.3801 87.9487 45.2489C87.999 45.1167 88.0242 44.9697 88.0242 44.808C88.0242 44.6482 87.9995 44.5042 87.9502 44.3759C87.9018 44.2467 87.8284 44.1446 87.7297 44.0696C87.6321 43.9937 87.5092 43.9557 87.3613 43.9557C87.2192 43.9557 87.0999 43.9917 87.0032 44.0637C86.9065 44.1347 86.8335 44.2344 86.7842 44.3626C86.7349 44.4898 86.7102 44.6383 86.7102 44.808ZM90.5159 44.1806L90.2022 44.2694C90.1825 44.2171 90.1534 44.1663 90.1149 44.117C90.0774 44.0667 90.0261 44.0252 89.961 43.9927C89.8959 43.9601 89.8126 43.9439 89.711 43.9439C89.5719 43.9439 89.456 43.9759 89.3632 44.04C89.2715 44.1032 89.2256 44.1836 89.2256 44.2812C89.2256 44.368 89.2572 44.4366 89.3203 44.4869C89.3835 44.5372 89.4821 44.5791 89.6163 44.6127L89.9536 44.6955C90.1568 44.7448 90.3082 44.8203 90.4079 44.9219C90.5075 45.0225 90.5573 45.1522 90.5573 45.311C90.5573 45.4413 90.5198 45.5577 90.4449 45.6602C90.3709 45.7628 90.2673 45.8437 90.1341 45.9029C90.001 45.9621 89.8461 45.9917 89.6695 45.9917C89.4377 45.9917 89.2459 45.9414 89.0939 45.8408C88.942 45.7401 88.8459 45.5932 88.8054 45.3998L89.1369 45.317C89.1684 45.4393 89.2281 45.531 89.3159 45.5922C89.4047 45.6533 89.5206 45.6839 89.6636 45.6839C89.8264 45.6839 89.9556 45.6494 90.0513 45.5803C90.1479 45.5103 90.1963 45.4265 90.1963 45.3288C90.1963 45.2499 90.1687 45.1838 90.1134 45.1305C90.0582 45.0763 89.9733 45.0358 89.8589 45.0092L89.4801 44.9204C89.272 44.8711 89.1191 44.7947 89.0214 44.6911C88.9248 44.5865 88.8764 44.4558 88.8764 44.299C88.8764 44.1707 88.9124 44.0573 88.9844 43.9587C89.0574 43.86 89.1566 43.7826 89.2819 43.7264C89.4081 43.6701 89.5512 43.642 89.711 43.642C89.9359 43.642 90.1124 43.6913 90.2407 43.79C90.3699 43.8886 90.4616 44.0188 90.5159 44.1806ZM92.5152 45.0151V43.6716H92.8644V45.9443H92.5152V45.5596H92.4916C92.4383 45.675 92.3554 45.7732 92.243 45.8541C92.1305 45.934 91.9885 45.9739 91.8168 45.9739C91.6748 45.9739 91.5485 45.9429 91.4381 45.8807C91.3276 45.8176 91.2408 45.7229 91.1776 45.5966C91.1145 45.4694 91.0829 45.3091 91.0829 45.1157V43.6716H91.4321V45.0921C91.4321 45.2578 91.4785 45.39 91.5712 45.4886C91.6649 45.5872 91.7843 45.6366 91.9293 45.6366C92.0161 45.6366 92.1044 45.6144 92.1942 45.57C92.2849 45.5256 92.3609 45.4575 92.422 45.3658C92.4842 45.2741 92.5152 45.1572 92.5152 45.0151ZM93.504 45.9443V43.6716H93.8414V44.0267H93.871C93.9183 43.9054 93.9948 43.8112 94.1003 43.7441C94.2058 43.676 94.3326 43.642 94.4806 43.642C94.6305 43.642 94.7553 43.676 94.8549 43.7441C94.9555 43.8112 95.034 43.9054 95.0902 44.0267H95.1139C95.1721 43.9093 95.2594 43.8161 95.3757 43.7471C95.4921 43.677 95.6317 43.642 95.7945 43.642C95.9977 43.642 96.1639 43.7056 96.2931 43.8329C96.4223 43.9592 96.487 44.1559 96.487 44.4233V45.9443H96.1378V44.4233C96.1378 44.2556 96.0919 44.1357 96.0002 44.0637C95.9084 43.9917 95.8004 43.9557 95.6761 43.9557C95.5163 43.9557 95.3925 44.004 95.3047 44.1007C95.2169 44.1964 95.173 44.3177 95.173 44.4647V45.9443H94.8179V44.3878C94.8179 44.2585 94.776 44.1545 94.6922 44.0756C94.6083 43.9956 94.5003 43.9557 94.3681 43.9557C94.2774 43.9557 94.1925 43.9799 94.1136 44.0282C94.0357 44.0765 93.9726 44.1436 93.9242 44.2294C93.8769 44.3143 93.8532 44.4124 93.8532 44.5239V45.9443H93.504ZM99.1555 45.9917C98.9661 45.9917 98.7989 45.9438 98.6539 45.8482C98.5089 45.7515 98.3955 45.6154 98.3136 45.4398C98.2317 45.2632 98.1908 45.0546 98.1908 44.8139C98.1908 44.5752 98.2317 44.368 98.3136 44.1924C98.3955 44.0169 98.5094 43.8812 98.6554 43.7855C98.8014 43.6899 98.97 43.642 99.1614 43.642C99.3094 43.642 99.4263 43.6667 99.5121 43.716C99.5989 43.7643 99.665 43.8196 99.7104 43.8817C99.7567 43.9429 99.7927 43.9932 99.8184 44.0326H99.848V42.914H100.197V45.9443H99.8598V45.5951H99.8184C99.7927 45.6366 99.7562 45.6889 99.7089 45.752C99.6615 45.8141 99.594 45.8699 99.5062 45.9192C99.4184 45.9675 99.3015 45.9917 99.1555 45.9917ZM99.2028 45.678C99.3429 45.678 99.4613 45.6415 99.558 45.5685C99.6546 45.4945 99.7281 45.3924 99.7784 45.2622C99.8287 45.131 99.8539 44.9796 99.8539 44.808C99.8539 44.6383 99.8292 44.4898 99.7799 44.3626C99.7306 44.2344 99.6576 44.1347 99.5609 44.0637C99.4642 43.9917 99.3449 43.9557 99.2028 43.9557C99.0549 43.9557 98.9316 43.9937 98.8329 44.0696C98.7353 44.1446 98.6618 44.2467 98.6125 44.3759C98.5641 44.5042 98.54 44.6482 98.54 44.808C98.54 44.9697 98.5646 45.1167 98.6139 45.2489C98.6643 45.3801 98.7382 45.4847 98.8359 45.5626C98.9345 45.6395 99.0569 45.678 99.2028 45.678ZM101.808 45.9917C101.603 45.9917 101.423 45.9429 101.268 45.8452C101.115 45.7475 100.994 45.6109 100.907 45.4353C100.822 45.2598 100.779 45.0546 100.779 44.8198C100.779 44.5831 100.822 44.3764 100.907 44.1998C100.994 44.0233 101.115 43.8862 101.268 43.7885C101.423 43.6908 101.603 43.642 101.808 43.642C102.014 43.642 102.193 43.6908 102.347 43.7885C102.502 43.8862 102.622 44.0233 102.708 44.1998C102.795 44.3764 102.838 44.5831 102.838 44.8198C102.838 45.0546 102.795 45.2598 102.708 45.4353C102.622 45.6109 102.502 45.7475 102.347 45.8452C102.193 45.9429 102.014 45.9917 101.808 45.9917ZM101.808 45.678C101.964 45.678 102.093 45.6381 102.193 45.5581C102.294 45.4782 102.368 45.3732 102.417 45.243C102.465 45.1128 102.489 44.9717 102.489 44.8198C102.489 44.6679 102.465 44.5263 102.417 44.3952C102.368 44.264 102.294 44.1579 102.193 44.077C102.093 43.9961 101.964 43.9557 101.808 43.9557C101.653 43.9557 101.524 43.9961 101.424 44.077C101.323 44.1579 101.249 44.264 101.2 44.3952C101.152 44.5263 101.128 44.6679 101.128 44.8198C101.128 44.9717 101.152 45.1128 101.2 45.243C101.249 45.3732 101.323 45.4782 101.424 45.5581C101.524 45.6381 101.653 45.678 101.808 45.678ZM103.721 42.914V45.9443H103.371V42.914H103.721ZM105.283 45.9917C105.078 45.9917 104.898 45.9429 104.743 45.8452C104.589 45.7475 104.469 45.6109 104.382 45.4353C104.297 45.2598 104.254 45.0546 104.254 44.8198C104.254 44.5831 104.297 44.3764 104.382 44.1998C104.469 44.0233 104.589 43.8862 104.743 43.7885C104.898 43.6908 105.078 43.642 105.283 43.642C105.489 43.642 105.668 43.6908 105.822 43.7885C105.977 43.8862 106.097 44.0233 106.183 44.1998C106.27 44.3764 106.313 44.5831 106.313 44.8198C106.313 45.0546 106.27 45.2598 106.183 45.4353C106.097 45.6109 105.977 45.7475 105.822 45.8452C105.668 45.9429 105.489 45.9917 105.283 45.9917ZM105.283 45.678C105.439 45.678 105.568 45.6381 105.668 45.5581C105.769 45.4782 105.843 45.3732 105.892 45.243C105.94 45.1128 105.964 44.9717 105.964 44.8198C105.964 44.6679 105.94 44.5263 105.892 44.3952C105.843 44.264 105.769 44.1579 105.668 44.077C105.568 43.9961 105.439 43.9557 105.283 43.9557C105.128 43.9557 104.999 43.9961 104.899 44.077C104.798 44.1579 104.724 44.264 104.675 44.3952C104.627 44.5263 104.603 44.6679 104.603 44.8198C104.603 44.9717 104.627 45.1128 104.675 45.243C104.724 45.3732 104.798 45.4782 104.899 45.5581C104.999 45.6381 105.128 45.678 105.283 45.678ZM106.846 45.9443V43.6716H107.184V44.0149H107.207C107.249 43.9024 107.324 43.8112 107.432 43.7412C107.541 43.6711 107.663 43.6361 107.799 43.6361C107.825 43.6361 107.857 43.6366 107.895 43.6376C107.934 43.6386 107.963 43.64 107.983 43.642V43.9971C107.971 43.9942 107.944 43.9897 107.901 43.9838C107.86 43.9769 107.816 43.9735 107.77 43.9735C107.659 43.9735 107.56 43.9966 107.474 44.043C107.388 44.0884 107.32 44.1515 107.269 44.2324C107.22 44.3123 107.195 44.4035 107.195 44.5061V45.9443H106.846ZM111.178 44.1806L110.865 44.2694C110.845 44.2171 110.816 44.1663 110.777 44.117C110.74 44.0667 110.689 44.0252 110.623 43.9927C110.558 43.9601 110.475 43.9439 110.373 43.9439C110.234 43.9439 110.118 43.9759 110.026 44.04C109.934 44.1032 109.888 44.1836 109.888 44.2812C109.888 44.368 109.92 44.4366 109.983 44.4869C110.046 44.5372 110.145 44.5791 110.279 44.6127L110.616 44.6955C110.819 44.7448 110.971 44.8203 111.07 44.9219C111.17 45.0225 111.22 45.1522 111.22 45.311C111.22 45.4413 111.182 45.5577 111.107 45.6602C111.033 45.7628 110.93 45.8437 110.797 45.9029C110.663 45.9621 110.509 45.9917 110.332 45.9917C110.1 45.9917 109.908 45.9414 109.756 45.8408C109.604 45.7401 109.508 45.5932 109.468 45.3998L109.799 45.317C109.831 45.4393 109.891 45.531 109.978 45.5922C110.067 45.6533 110.183 45.6839 110.326 45.6839C110.489 45.6839 110.618 45.6494 110.714 45.5803C110.81 45.5103 110.859 45.4265 110.859 45.3288C110.859 45.2499 110.831 45.1838 110.776 45.1305C110.721 45.0763 110.636 45.0358 110.521 45.0092L110.143 44.9204C109.934 44.8711 109.782 44.7947 109.684 44.6911C109.587 44.5865 109.539 44.4558 109.539 44.299C109.539 44.1707 109.575 44.0573 109.647 43.9587C109.72 43.86 109.819 43.7826 109.944 43.7264C110.071 43.6701 110.214 43.642 110.373 43.642C110.598 43.642 110.775 43.6913 110.903 43.79C111.032 43.8886 111.124 44.0188 111.178 44.1806ZM111.745 45.9443V43.6716H112.095V45.9443H111.745ZM111.923 43.2928C111.855 43.2928 111.796 43.2696 111.747 43.2233C111.699 43.1769 111.674 43.1212 111.674 43.0561C111.674 42.991 111.699 42.9352 111.747 42.8889C111.796 42.8425 111.855 42.8193 111.923 42.8193C111.991 42.8193 112.049 42.8425 112.098 42.8889C112.147 42.9352 112.172 42.991 112.172 43.0561C112.172 43.1212 112.147 43.1769 112.098 43.2233C112.049 43.2696 111.991 43.2928 111.923 43.2928ZM113.083 44.5771V45.9443H112.734V43.6716H113.072V44.0267H113.101C113.154 43.9113 113.235 43.8186 113.344 43.7486C113.452 43.6775 113.592 43.642 113.764 43.642C113.918 43.642 114.053 43.6736 114.168 43.7367C114.283 43.7989 114.373 43.8936 114.437 44.0208C114.501 44.1471 114.533 44.3069 114.533 44.5002V45.9443H114.184V44.5239C114.184 44.3453 114.138 44.2063 114.045 44.1066C113.952 44.006 113.825 43.9557 113.663 43.9557C113.552 43.9557 113.452 43.9799 113.364 44.0282C113.278 44.0765 113.209 44.1471 113.159 44.2398C113.109 44.3325 113.083 44.445 113.083 44.5771ZM117.012 45.9976C116.868 45.9976 116.737 45.9705 116.62 45.9162C116.503 45.861 116.409 45.7816 116.34 45.678C116.271 45.5734 116.237 45.4472 116.237 45.2992C116.237 45.169 116.262 45.0635 116.314 44.9826C116.365 44.9007 116.434 44.8366 116.519 44.7902C116.605 44.7439 116.7 44.7093 116.804 44.6866C116.908 44.663 117.013 44.6442 117.119 44.6304C117.257 44.6127 117.369 44.5993 117.455 44.5905C117.541 44.5806 117.605 44.5643 117.644 44.5416C117.684 44.5189 117.705 44.4795 117.705 44.4233V44.4114C117.705 44.2654 117.665 44.152 117.585 44.0711C117.506 43.9902 117.386 43.9498 117.225 43.9498C117.059 43.9498 116.928 43.9863 116.833 44.0593C116.738 44.1323 116.672 44.2102 116.633 44.2931L116.302 44.1747C116.361 44.0366 116.44 43.9291 116.539 43.8521C116.638 43.7742 116.747 43.7199 116.864 43.6894C116.983 43.6578 117.099 43.642 117.213 43.642C117.286 43.642 117.37 43.6509 117.465 43.6686C117.561 43.6854 117.653 43.7204 117.742 43.7737C117.831 43.827 117.906 43.9074 117.965 44.0149C118.024 44.1224 118.054 44.2664 118.054 44.4469V45.9443H117.705V45.6366H117.687C117.663 45.6859 117.624 45.7387 117.569 45.7949C117.513 45.8511 117.44 45.899 117.348 45.9384C117.256 45.9779 117.144 45.9976 117.012 45.9976ZM117.065 45.6839C117.204 45.6839 117.32 45.6568 117.415 45.6025C117.51 45.5483 117.582 45.4782 117.631 45.3924C117.68 45.3066 117.705 45.2164 117.705 45.1217V44.8021C117.69 44.8198 117.657 44.8361 117.607 44.8509C117.558 44.8647 117.5 44.877 117.435 44.8879C117.371 44.8977 117.309 44.9066 117.247 44.9145C117.187 44.9214 117.138 44.9273 117.101 44.9323C117.01 44.9441 116.925 44.9633 116.846 44.99C116.769 45.0156 116.705 45.0546 116.657 45.1069C116.61 45.1582 116.586 45.2282 116.586 45.317C116.586 45.4383 116.631 45.53 116.721 45.5922C116.811 45.6533 116.926 45.6839 117.065 45.6839ZM118.691 45.9443V43.6716H119.029V44.0267H119.058C119.105 43.9054 119.182 43.8112 119.287 43.7441C119.393 43.676 119.52 43.642 119.668 43.642C119.818 43.642 119.942 43.676 120.042 43.7441C120.143 43.8112 120.221 43.9054 120.277 44.0267H120.301C120.359 43.9093 120.447 43.8161 120.563 43.7471C120.679 43.677 120.819 43.642 120.982 43.642C121.185 43.642 121.351 43.7056 121.48 43.8329C121.61 43.9592 121.674 44.1559 121.674 44.4233V45.9443H121.325V44.4233C121.325 44.2556 121.279 44.1357 121.187 44.0637C121.096 43.9917 120.988 43.9557 120.863 43.9557C120.703 43.9557 120.58 44.004 120.492 44.1007C120.404 44.1964 120.36 44.3177 120.36 44.4647V45.9443H120.005V44.3878C120.005 44.2585 119.963 44.1545 119.879 44.0756C119.795 43.9956 119.687 43.9557 119.555 43.9557C119.465 43.9557 119.38 43.9799 119.301 44.0282C119.223 44.0765 119.16 44.1436 119.111 44.2294C119.064 44.3143 119.04 44.4124 119.04 44.5239V45.9443H118.691ZM122.313 45.9443V43.6716H122.65V44.0267H122.68C122.727 43.9054 122.803 43.8112 122.909 43.7441C123.014 43.676 123.141 43.642 123.289 43.642C123.439 43.642 123.564 43.676 123.664 43.7441C123.764 43.8112 123.843 43.9054 123.899 44.0267H123.922C123.981 43.9093 124.068 43.8161 124.184 43.7471C124.301 43.677 124.44 43.642 124.603 43.642C124.806 43.642 124.972 43.7056 125.102 43.8329C125.231 43.9592 125.296 44.1559 125.296 44.4233V45.9443H124.946V44.4233C124.946 44.2556 124.9 44.1357 124.809 44.0637C124.717 43.9917 124.609 43.9557 124.485 43.9557C124.325 43.9557 124.201 44.004 124.113 44.1007C124.026 44.1964 123.982 44.3177 123.982 44.4647V45.9443H123.627V44.3878C123.627 44.2585 123.585 44.1545 123.501 44.0756C123.417 43.9956 123.309 43.9557 123.177 43.9557C123.086 43.9557 123.001 43.9799 122.922 44.0282C122.844 44.0765 122.781 44.1436 122.733 44.2294C122.685 44.3143 122.662 44.4124 122.662 44.5239V45.9443H122.313ZM126.887 45.9917C126.668 45.9917 126.479 45.9433 126.32 45.8467C126.162 45.749 126.041 45.6129 125.955 45.4383C125.87 45.2627 125.827 45.0585 125.827 44.8257C125.827 44.5929 125.87 44.3878 125.955 44.2102C126.041 44.0317 126.16 43.8926 126.313 43.7929C126.467 43.6923 126.646 43.642 126.851 43.642C126.97 43.642 127.087 43.6617 127.202 43.7012C127.317 43.7407 127.423 43.8048 127.517 43.8936C127.612 43.9813 127.687 44.0977 127.744 44.2427C127.8 44.3878 127.828 44.5663 127.828 44.7784V44.9263H126.076V44.6245H127.473C127.473 44.4963 127.447 44.3818 127.396 44.2812C127.346 44.1806 127.274 44.1012 127.18 44.043C127.087 43.9848 126.978 43.9557 126.851 43.9557C126.712 43.9557 126.592 43.9902 126.49 44.0593C126.39 44.1273 126.312 44.2161 126.258 44.3256C126.204 44.4351 126.177 44.5525 126.177 44.6778V44.879C126.177 45.0506 126.206 45.1961 126.265 45.3155C126.326 45.4339 126.409 45.5241 126.516 45.5863C126.622 45.6474 126.746 45.678 126.887 45.678C126.979 45.678 127.062 45.6652 127.135 45.6395C127.21 45.6129 127.275 45.5734 127.329 45.5212C127.384 45.4679 127.425 45.4018 127.455 45.3229L127.792 45.4176C127.757 45.532 127.697 45.6326 127.613 45.7194C127.53 45.8052 127.426 45.8723 127.303 45.9207C127.179 45.968 127.041 45.9917 126.887 45.9917ZM129.348 43.6716V43.9675H128.17V43.6716H129.348ZM128.513 43.1271H128.862V45.2933C128.862 45.3919 128.877 45.4659 128.905 45.5152C128.935 45.5636 128.972 45.5961 129.018 45.6129C129.064 45.6287 129.113 45.6366 129.164 45.6366C129.203 45.6366 129.234 45.6346 129.259 45.6307C129.283 45.6257 129.303 45.6218 129.318 45.6188L129.389 45.9325C129.365 45.9414 129.332 45.9503 129.29 45.9591C129.247 45.969 129.194 45.9739 129.129 45.9739C129.03 45.9739 128.933 45.9527 128.839 45.9103C128.745 45.8679 128.667 45.8033 128.605 45.7165C128.544 45.6297 128.513 45.5202 128.513 45.388V43.1271Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_103_26">
    <rect width="200" height="142.222" fill="white"/>
    </clipPath>
    </defs>
    </svg>
        `
export default svg;


