
class kendaraan {
    public String nama;
    public String merk;
    public String model;
    public int tahun;

}

class mobil extends kendaraan {
    public void start_engine() {
        System.out.println("mesin mobil aktif");
    }
}

class motor extends kendaraan {
    public int jumlah_roda;

    public void start_engine() {
        System.out.println("mesin motor aktif");
    }
}

public abstract class Terbang();

public class Main {
    public static void main(String[] args) {
        kendaraan kendaraan1 = new kendaraan();
        // kendaraan1.nama = "Mobil";
        // kendaraan1.merk = "Toyota";
        // kendaraan1.model = "Mercy";
        // kendaraan1.tahun = 2020;
        // System.out.println("Keterangan Kendaraan ini ialah " + kendaraan1.nama + "
        // merk " + kendaraan1.merk);

        mobil mobil1 = new mobil();
        mobil1.nama = "Mobil";
        mobil1.merk = "Toyota";
        mobil1.model = "Mercy";
        mobil1.tahun = 2024;
        mobil1.start_engine();
        System.out.println("Nama : " + mobil1.nama + ", Merk : " + mobil1.merk + ", Model : " + mobil1.model
                + ", Tahun : " + mobil1.tahun);

        motor motor1 = new motor();
        motor1.nama = "Motor";
        motor1.merk = "Honda";
        motor1.model = "CBR";
        motor1.tahun = 2014;
        motor1.start_engine();
        System.out.println("Nama : " + motor1.nama + ", Merk : " + motor1.merk + ", Model : " + motor1.model
                + ", Tahun : " + motor1.tahun);

    }
}
