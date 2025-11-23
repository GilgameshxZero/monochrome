1. `sudo modprobe ec_sys write_support=1`
2. `echo -n -e "\x88" | sudo dd of="/sys/kernel/debug/ec/ec0/io" bs=1 seek=45 count=1 conv=notrunc`
