import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {

    public static Product findById(Product[] products, int id) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) >>> 1;          
            int midId = products[mid].getProductId();

            if (midId == id) return products[mid]; 
            else if (midId < id) low = mid + 1;    
            else high = mid - 1;                  
        }
        return null;                              
    }
    public static void sortById(Product[] products) {
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));
    }
}
